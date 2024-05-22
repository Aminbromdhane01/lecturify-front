import * as React from 'react';
import { Box , Paper, Typography } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { useLazyGetCommentCountsBySentimentsQuery } from '@/RTK/api/AdminApi';
import { constants } from '@/utils/constants/constants';
import { ChartContainer } from './CommentSentimentPieChart.style';


export default function CommentSentimentPieChart() {
    const [fetch ,{data , isLoading , error}] = useLazyGetCommentCountsBySentimentsQuery()
    React.useEffect(()=>{
      fetch() 
    },[])
    const pieData = data
    ? data.map((item, index) => ({
        id: index,
        value: item.count,
        label: item.sentiment || 'Unknown',
      }))
    : [];

  
  return (
    <ChartContainer elevation={2} >
      <Box height={'40vh'} width={'100%'} display={'flex'} alignItems={'center'} flexDirection={'column'}>
      <Typography variant="h6" gutterBottom>
       {constants.AdminDashboard.COMMENT_PIE_CHART_TITLE}
      </Typography>
      {isLoading ? (
          <Typography variant='body2'>{constants.AdminDashboard.LOADING_MESSAGE}</Typography>
        ) : error ? (
          <Typography variant='body2'>{constants.AdminDashboard.ERROR_DATA_MESSAGE}</Typography>
        ) : (
          <PieChart
            series={[
              {
                data: pieData,
              },
            ]}
            width={400}
            height={200}
          />
        )}
    </Box>
    </ChartContainer>
  );
}