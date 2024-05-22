'use client'
import { Stack, Typography } from '@mui/material'
import React from 'react'
import { AdminPaper, AdminTypography } from './AdminDashboardCard.style'
import useCounter from '@/hooks/useCounter'

interface AdminDashboardCardProps {
    bgColor : string
    value : number 
    title : string
}

const AdminDashboardCard = ({bgColor , value , title  } : AdminDashboardCardProps) => {
  const counter = useCounter(value , 50)

  return (
    <AdminPaper  elevation={1} color={bgColor}>
        <Stack>
        <AdminTypography variant='h4' fontSize={'bold'}>{counter}</AdminTypography>
        <AdminTypography variant='body2' fontSize={'20px'} >{title}</AdminTypography>
        </Stack>
    </AdminPaper>
  )
}

export default AdminDashboardCard
