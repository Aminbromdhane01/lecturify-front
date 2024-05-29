import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const textToSpeechApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-inference.huggingface.co/models/facebook/mms-tts-eng',
    prepareHeaders: (headers) => {
      headers.set('Authorization', 'Bearer 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');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAudio: builder.mutation<string, string>({
      query: (summary) => ({
        url: '',
        method: 'POST',
        body: JSON.stringify({ inputs: summary }),
      }),
      transformResponse: (response: Response) => {
        console.log(response);
        
        return response.blob().then((data) => URL.createObjectURL(data));
      },
    }),
  }),
});

export const { useGetAudioMutation } = textToSpeechApi;