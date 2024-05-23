'use client'
import AdminTopBar from '@/components/AdminTopbar/AdminTopBar'
import BookDataTables from '@/features/admin/BookDataTables.tsx/BookDataTables'
import UserDataTable from '@/features/admin/UserDataTable'
import { Box } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}> 
       <AdminTopBar/>
       <UserDataTable/>
    </Box>
  )
}

export default page
