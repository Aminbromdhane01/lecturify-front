'use client'
import { Box, Paper, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Image from 'next/image';
import { BarChart } from '@mui/x-charts/BarChart';
import { getMonthName } from '@/helpers/getMonthName';
import { useLazyGetBookCountByMonthQuery } from '@/RTK/api/AdminApi';


const BookChart = () => {
  const [fetch,{ data, error, isLoading }] = useLazyGetBookCountByMonthQuery();
  useEffect(() =>{
    fetch()
  },[])

  const xData = data ? data.map(item => getMonthName(item.month)) : [];
  const yData = data ? data.map(item => item.count) : [];
  
  return (
   <Paper sx={{display : 'flex' , minHeight  : '400px'}}>
    <Stack direction={'row'}>
    <Box borderRadius={'50px'} position={'relative'} height={'50px'} width={'50px'}>
     <Image src={'/stats_two.svg'}  alt='Stats Image' fill/>
    </Box>
    <Typography variant='body1'fontWeight={'bold'} align='center' margin={1}>Title</Typography>
    </Stack>
    {isLoading && <Typography variant='body1' align='center'>Loading...</Typography>}
      {error && <Typography variant='body1' align='center'>Error loading data</Typography>}
      {data && (
        <BarChart
        xAxis={[{ scaleType: 'band', data: xData }]}
        series={[{ data: yData }]}
        height={400}
  
      />
      )}
   </Paper>
   
  )
}

export default BookChart