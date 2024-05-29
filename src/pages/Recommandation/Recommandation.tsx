'use client'
import Input from '@/layouts/Input/Input'
import { Avatar, Box, Button, Divider, Grid, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { StyledAudioPlayer, StyledButton } from './Recommandation.style'
import RecommandationCard from '@/components/RecommandationCard/RecommandationCard'
import { CardMedia } from '@mui/material';
import VoiceSelect from '@/components/VoiceSelect/VoiceSelect'
import { SubmitHandler, useForm } from 'react-hook-form'
import { RecommendationQueryParams, useLazyGetRecommendationsQuery } from '@/RTK/api/RecommandationApi'
import jsPDF from 'jspdf'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { downloadPdf } from '@/helpers/downloadPdf'
import { useGetAudioMutation } from '@/RTK/api/TextToSpeechApi'
import LoadingRecommandation from '@/components/Recommandation/LoadingRecommandation'
import ControlledAlert from '@/components/Alert/ControllerdAlert'
import NotDataFound from '@/components/Recommandation/NotDataFound'




const Recommandation = () => {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<RecommendationQueryParams>(
    )
    const [trigger, {data : books , error, isLoading }] = useLazyGetRecommendationsQuery()

    const onSubmit: SubmitHandler<RecommendationQueryParams> = async (data) => {
       await trigger(data)
       setSummary(null)
       
    }
    
    const [summary , setSummary] = useState<string | null>(null)
    const [title , setTitle] = useState<string | null>(null)
    const[audio , setaudio] = useState<any>('')
    const [isLoadingAudio, setIsLoadingAudio] = useState(false);
    const [isErrorAudio, setIsErrorAudio] = useState(false)

    
    
    async function query(data : any) {
      const response = await fetch(
        process.env.NEXT_PUBLIC_TEXT_TO_SPEECH_URL as string,
        {
          headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_TEXT_TO_SPEECH_TOKEN}` },
          method: "POST",
          body: JSON.stringify(data),
        }
      );
        const result = await response
        return result;
      }
  const fetchAudio = async () => {
    setIsLoadingAudio(true);
    try {
      const response = await query({ "inputs": summary });
      const data = await response.blob();
      const blobUrl = URL.createObjectURL(data);
      setaudio(blobUrl);
    } catch (error) {
      setIsErrorAudio(true)
      
    } finally {
      setIsLoadingAudio(false);
    }
  };
  

  return (
    <Grid container bgcolor={'#CFECF1'} height={'100%'} minHeight={'100vh'} p={2}>
        <Grid item lg={8} md={7} xs={12} color={'black'} >
             <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
               <Stack width={'50%'}>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Input label='Your requirement' register={register('query')} />
                 
                <StyledButton  type='submit' >get recommandation</StyledButton>
                </form>
                </Stack>
                <Grid container alignItems={'center'} justifyContent={'center'}>
                {books?.map((book, index) => (
                            <Grid item xs={6} md={4} lg={3}>
                                <RecommandationCard 
                                    title={book.title} 
                                    genre={book.genre} 
                                    summary={book.summary} 
                                    onclick={()=> {setSummary(book.summary)
                                      setTitle(book.title)
                                    }}
                                />
                            </Grid>
                        ))}
                
                {isLoading && <LoadingRecommandation/>}  
                {!books && ! isLoading && <Grid item xs={8}><NotDataFound/></Grid>}  
                </Grid>
              </Box>
        </Grid>

        <Grid item lg={4} md={5} xs={12} color={'black'}>
        

            <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
        <StyledButton onClick={fetchAudio} disabled={!summary}>Listen to the summary</StyledButton>
        <Button onClick={() => downloadPdf({title : title as string , summary : summary as string})} disabled={!summary} sx={{backgroundColor : 'red' , color: 'white'}}><PictureAsPdfIcon/> Download as PDF</Button>
        <Typography variant='h4' fontWeight={'bold'}>
          Summary 
        </Typography>
        
        {audio != false && 
       
        <StyledAudioPlayer component={'audio'} controls src={audio} ></StyledAudioPlayer>
         }
         {isLoadingAudio && <LoadingRecommandation/>}
         {isErrorAudio && <ControlledAlert duration={500} severity='error' content='error loading audio' open={true}/>}
         <Typography variant='body2'>
            {summary}
        </Typography>
        </Box>
        </Grid>
        
    </Grid>
  
  )
}

export default Recommandation
