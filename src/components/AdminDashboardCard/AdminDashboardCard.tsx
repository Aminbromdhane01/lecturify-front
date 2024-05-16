'use client'
import { Stack, Typography } from '@mui/material'
import React from 'react'
import { AdminPaper, AdminTypography } from './AdminDashboardCard.style'
import useCounter from '@/hooks/useCounter'

interface AdminDashboardCardProps {
    bgColor : string
}

const AdminDashboardCard = ({bgColor} : AdminDashboardCardProps) => {
  const counter = useCounter(20 , 50)

  return (
    <AdminPaper  elevation={1} color={bgColor}>
        <Stack>
        <AdminTypography variant='h4' fontSize={'bold'}>{counter}</AdminTypography>
        <AdminTypography variant='body2' fontSize={'20px'} >title</AdminTypography>
        </Stack>
    </AdminPaper>
  )
}

export default AdminDashboardCard
