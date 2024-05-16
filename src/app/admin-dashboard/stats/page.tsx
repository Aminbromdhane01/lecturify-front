'use client'
import AdminTopBar from '@/components/AdminTopbar/AdminTopBar'
import BookGenreChart from '@/components/booksGenreChart/BookGenreChart'
import { Grid } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <Grid container spacing={2} justifyContent={'center'}  >
     <Grid item xs ={12}><AdminTopBar/></Grid>
     <Grid item xs={5} ml={1}><BookGenreChart/></Grid>
     <Grid item xs={5}><BookGenreChart/></Grid>
     <Grid item xs = {10} ><BookGenreChart/></Grid>
   </Grid>
  )
}

export default page
   