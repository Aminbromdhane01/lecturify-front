import React from 'react'
import Lottie from "lottie-react";
import Search from '../../assets/images/lottie/search.json'
import { Box } from '@mui/material'


const SearchForBook = () => {
  return (
    <Box >
      <Lottie animationData={Search} loop={true} height={10}/>
    </Box>
  )
}

export default SearchForBook
