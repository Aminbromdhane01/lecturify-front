import AdminDashboardCard from '@/components/AdminDashboardCard/AdminDashboardCard'
import AdminTopBar from '@/components/AdminTopbar/AdminTopBar'
import BookChart from '@/components/BookChart/BookChart'
import { Grid } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <Grid container spacing={1}>
        <Grid item xs ={12}><AdminTopBar/></Grid>
        <Grid item xs={12} sm={6} md={3}><AdminDashboardCard bgColor='#5856d6'/></Grid>
        <Grid item xs={12} sm={6} md={3}><AdminDashboardCard bgColor='#3399ff'/></Grid>
        <Grid item xs={12} sm={6} md={3}><AdminDashboardCard bgColor='#f9b115'/></Grid>
        <Grid item xs={12} sm={6} md={3}><AdminDashboardCard bgColor='#e55353'/></Grid>
        <Grid item xs={12} m={2}><BookChart/></Grid>
    </Grid>
  )
}

export default page