import React from 'react'
import { Editor } from '@tinymce/tinymce-react'; 
import { Request, RespondWith } from './essay-editor.interface';
import { constants } from '@/utils/constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setContent } from '@/RTK/slices/EssaySlice';
import { RootState } from '@/RTK/store';

const EssayEditor = () => {
    const dispatch = useDispatch();

    const handleEditorChange = (newContent : any) => {
        dispatch(setContent(newContent));
    };


    const ai_request = (request : Request, respondWith : RespondWith) => {        
        const azureOpenAiOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-key': process.env.NEXT_PUBLIC_AZURE_OPENAI_API_KEY as string
          },
          body: JSON.stringify({
            temperature: 0.7,
            max_tokens: 800,
            messages: [{ role: 'system', content: "You are a helpful assistant" },
            { role: "user", content: request.query}
            ],
          })
          
        };
        respondWith.string((signal : AbortSignal) => fetch(process.env.NEXT_PUBLIC_AZURE_OPENAI_ENDPOINT as string, { signal, ...azureOpenAiOptions })
          .then(async (response) => {
            if (response) {
              const data = await response.json();              
              if (data.error) {
                throw new Error(`${data.error.type}: ${data.error.message}`);
              } else if (response.ok) {
                return data?.choices[0]?.message?.content?.trim();
              }
            } else {
              throw new Error(constants.EssayModule.FAILED_TO_COMMUNICATE_WITH_AZURE_MESSAGE);
            }
          })
        );
      };
  return (
    <Editor 
      apiKey={process.env.NEXT_PUBLIC_TINY_API_KEY as string}
      
      init={{
        plugins: 'ai',
        toolbar: 'undo redo | forecolor backcolor | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        textcolor_rows: "4",
        tinycomments_mode: 'embedded',
        content_style: "body { background-color : #E1E1E1; }",
        ai_request
      }}
      initialValue={constants.EssayModule.WELCOME_MESSAGE}
      onEditorChange={handleEditorChange}
      
    />
  )
}

export default EssayEditor
