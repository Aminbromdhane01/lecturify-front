'use client'
import { RootState } from '@/RTK/store'
import { Box, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import StyledSpan from './NoBooksFound.style'

const NoBooksFound = () => {
    const keyword = useSelector((state: RootState) => state.search.keyword); 

  return (
  <Grid gap={4} item display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
    <Image src={'/book-search.svg'} alt='No Books Found' height={70} width={100} />
    <Typography variant='h4'>No Books Found</Typography>
    <Typography variant='body1'>We couldn't find any matches for <StyledSpan>"{keyword}"</StyledSpan>  among our available titles. You might want to explore other
     categories or refine your search terms to discover relevant books</Typography>
  </Grid>
  )
}

export default NoBooksFound
