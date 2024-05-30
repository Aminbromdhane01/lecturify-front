import { Box } from '@mui/material'
import React from 'react'
import Lottie from "lottie-react";
import Recommandation from '../../assets/images/lottie/recommandation_two.json'
 

const NotDataFound = () => {
  return (
    <Box  >
      <Lottie animationData={Recommandation} loop={true} height={10}/>
    </Box>
  )
}

export default NotDataFound