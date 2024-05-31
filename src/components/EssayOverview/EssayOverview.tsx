import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { EssayButton, EssayContainer } from '../EssayDetailsPage/EssayDetails.style'
import { useLazyGetEssayByIdQuery } from '@/RTK/api/EssayApi';
import NoDataFound from '../NoBooksFound/NoDataFound';
interface EssayOverviewProps {
    essayId : number;
    onClick: () => void;
  }




const EssayOverview = ({onClick , essayId} : EssayOverviewProps) => {
    const [fetchEssay, { data, isLoading, isError }] = useLazyGetEssayByIdQuery();
    useEffect(()=>{
      fetchEssay(essayId)
    },[])
    console.log(data);
    
  return (
    <>
      <Typography variant='h4' fontWeight={'bold'} color={'white'} mt={2}>{data?.title}</Typography>
     <Typography variant='body1' color={'white'}>{data?.user?.fullName}</Typography>   
     <EssayContainer elevation={2}>
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
      {data && <Box dangerouslySetInnerHTML={{ __html: data.content }} />}
      {!data && <NoDataFound/>}
     </Box>
     <Box display={'flex'} alignItems={'flex-end'} justifyContent={'flex-end'}>
     <EssayButton onClick={onClick}>
      Give Feed Back</EssayButton>
     </Box>
     </EssayContainer>
    </>
  )
}

export default EssayOverview
