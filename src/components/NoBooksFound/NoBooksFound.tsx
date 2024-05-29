'use client'
import { RootState } from '@/RTK/store'
import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import { constants } from '@/utils/constants/constants'
import { StyledSpan } from './NoBooksFound.style'

const NoBooksFound = () => {
    const keyword = useSelector((state: RootState) => state.search.keyword); 

  return (
  <Grid gap={4} item display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
    <Image src={'/book-search.svg'} alt='No Books Found' height={70} width={100} />
    <Typography variant='h4'>{constants.BookForm.NO_BOOKS_FOUND_EN}</Typography>
    <Typography variant='body1'>{constants.BookForm.NO_BOOKS_FOUND_MESSAGE_ONE} <StyledSpan>"{keyword}"</StyledSpan>  
    {constants.BookForm.NO_BOOKS_FOUND_MESSAGE_TWO}</Typography>
  </Grid>
  )
}

export default NoBooksFound
