import React from 'react'
import Lottie from "lottie-react";
import Essay from '../../assets/images/lottie/book.json'
import { Box } from '@mui/material'


const EssayAnimation = () => {
  return (
    <Box width={'100px'} height={'100px'}>
      <Lottie animationData={Essay} loop={true} height={10}/>
    </Box>
  )
}

export default EssayAnimation
