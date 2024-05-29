import { Box } from '@mui/material'
import Lottie from 'lottie-react'
import React from 'react'
import NoData from '../../assets/images/lottie/no-data.json'
import { NoDataContainer } from './NoBooksFound.style'


const NoDataFound = () => {
  return (
    <NoDataContainer > 
      <Lottie animationData={NoData} loop={true} height={10}/>
    </NoDataContainer>
  )
}

export default NoDataFound
