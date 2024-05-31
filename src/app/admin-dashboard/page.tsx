'use client'
import AdminTopBar from '@/components/AdminTopbar/AdminTopBar'
import BookChart from '@/components/BookChart/BookChart'
import BookCountByWeekCard from '@/features/admin/Cards/BookCountByWeekCard'
import BooksCountCard from '@/features/admin/Cards/BooksCountCard'
import CommentsCountByWeekCard from '@/features/admin/Cards/CommentsCountByWeekCard'
import CommentsCountCard from '@/features/admin/Cards/CommentsCountCard'
import WithAdminAuth from '@/utils/WithAdminAuth'
import { Grid } from '@mui/material'
import React from 'react'

const AdminDashboard = () => {
  return (
    <Grid container spacing={1}>
        <Grid item xs ={12}><AdminTopBar/></Grid>
        <Grid item xs={12} sm={6} md={3}><BooksCountCard/></Grid>
        <Grid item xs={12} sm={6} md={3}><BookCountByWeekCard/></Grid>
        <Grid item xs={12} sm={6} md={3}><CommentsCountCard/></Grid>
        <Grid item xs={12} sm={6} md={3}><CommentsCountByWeekCard/></Grid>
        <Grid item xs={12} m={2}><BookChart/></Grid>
    </Grid>
  )
}

export default WithAdminAuth(AdminDashboard)