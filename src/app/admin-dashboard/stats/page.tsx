'use client'
import AdminTopBar from '@/components/AdminTopbar/AdminTopBar'
import CommentSentimentPieChart from '@/components/CommentSentimentPieChart/CommentSentimentPieChart'
import BookGenreChart from '@/components/booksGenreChart/BookGenreChart'
import { Grid } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <Grid container spacing={2} justifyContent={'center'}  >
     <Grid item xs ={12}><AdminTopBar/></Grid>
     <Grid item xs={10}><BookGenreChart/></Grid>
     <Grid item xs = {10} justifyContent={'center'} alignItems={'center'} ><CommentSentimentPieChart/></Grid>
   </Grid>
  )
}

export default page
   