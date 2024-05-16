import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box, Paper } from '@mui/material';

export default function BookGenreChart() {
  return (
    <Paper elevation={2} sx={{display : 'flex' , justifyContent :'center' }}  >
      <Box height={'40vh'} width={'100%'}>
    <BarChart 
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}

    />
    </Box>
    </Paper>
  );
}