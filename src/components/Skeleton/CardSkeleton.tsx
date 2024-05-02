import { Box, Skeleton } from '@mui/material'
import React from 'react'

const CardSkeleton = () => {
  return (
    <Box width={'80%'}>
     <Skeleton variant="rectangular" width={'100%'} height={200} />
     <Skeleton />
     <Skeleton width="60%" />
    </Box>
  )
}

export default CardSkeleton