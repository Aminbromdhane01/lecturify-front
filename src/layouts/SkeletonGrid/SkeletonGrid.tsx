import CardSkeleton from '@/components/Skeleton/CardSkeleton'
import { Grid } from '@mui/material'
import React from 'react'

const SkeletonGrid = () => {
  return (
    <>
    <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardSkeleton />
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardSkeleton />
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardSkeleton />
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
       <CardSkeleton />
    </Grid>

  </>
  )
}

export default SkeletonGrid
