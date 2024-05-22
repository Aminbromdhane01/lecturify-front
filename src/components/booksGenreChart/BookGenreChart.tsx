import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box , Paper, Typography } from '@mui/material';
import { useLazyGetBooksGroupedByGenreQuery } from '@/RTK/api/AdminApi';
import { constants } from '@/utils/constants/constants';
import { ChartContainer } from '../CommentSentimentPieChart/CommentSentimentPieChart.style';

export default function BookGenreChart() {
  const [fetch, { data, error, isLoading }] = useLazyGetBooksGroupedByGenreQuery();
    const xData = data ? data.map(item => item.genre) : [];
  const yData = data ? data.map(item => item.count) : [];
  React.useEffect(() => {
    fetch(); 
  }, []); 
  return (
    <ChartContainer elevation={2} >
      <Box height={'40vh'} width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Typography variant="h6" gutterBottom>
        {constants.AdminDashboard.BOOK_GENRE_CHART_TITLE}
      </Typography>
        {isLoading ? (
          <Typography variant='body2'>{constants.AdminDashboard.LOADING_MESSAGE}</Typography>
        ) : error ? (
          <Typography variant='body2'>{constants.AdminDashboard.ERROR_DATA_MESSAGE}</Typography>
        ) : (
          <BarChart 
         xAxis={[{ scaleType: 'band', data: xData }]}
         series={[{ data: yData }]}

        />)}

    </Box>
    </ChartContainer>
  );
}