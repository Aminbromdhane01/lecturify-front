import React from 'react';
import { Box, CircularProgress, } from '@mui/material';

const Loading = () => {
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
      <CircularProgress size={100} thickness={4} />
    </Box>
  );
};

export default Loading;