import React from 'react';
import { CircularProgress, } from '@mui/material';
import { Container } from './Loading.style';

const Loading = () => {
  return (
    <Container>
      <CircularProgress size={100} thickness={4} />
    </Container>
  );
};

export default Loading;