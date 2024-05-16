'use client'
import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import Image from 'next/image';


const BookChart = () => {
  return (
   <Paper sx={{display : 'flex' , minHeight  : '400px'}}>
    <Stack direction={'row'}>
    <Box borderRadius={'50px'} position={'relative'} height={'50px'} width={'50px'}>
     <Image src={'/stats_two.svg'}  alt='Stats Image' fill/>
    </Box>
    <Typography variant='body1'fontWeight={'bold'} align='center' margin={1}>Title</Typography>
    </Stack>
     <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
     height={400}
     width={1000}
    />
   </Paper>
   
  )
}

export default BookChart