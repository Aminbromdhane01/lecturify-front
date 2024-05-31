import { Box } from '@mui/material'
import Lottie from 'lottie-react'
import React from 'react'
import Error from '../../assets/images/lottie/error.json'

const ErrorPage = () => {
  return (
    <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} pt={4}>
        <Lottie animationData={Error} loop={true} height={10}/>
    </Box>
  )
}

export default ErrorPage