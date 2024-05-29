import { Box } from '@mui/material'
import Lottie from 'lottie-react'
import React from 'react'
import Loading from '../../assets/images/lottie/loading.json'


const LoadingRecommandation = () => {
  return (
    <Box height={'170px'} width={'170px'} >
      <Lottie animationData={Loading} loop={true} height={10}/>
    </Box>
  )
}

export default LoadingRecommandation