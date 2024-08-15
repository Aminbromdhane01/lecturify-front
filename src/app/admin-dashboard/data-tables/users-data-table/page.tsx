'use client'
import AdminTopBar from '@/components/AdminTopbar/AdminTopBar'
import BookDataTable from '@/components/BookDataTable/BookDataTable'
import CategoryTable from '@/components/CategoryTable/CategoryTable'
import WithAdminAuth from '@/utils/WithAdminAuth'
import { Box } from '@mui/material'
import React from 'react'

const AdminData = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}> 
       <AdminTopBar/>
       <CategoryTable/>
       <BookDataTable/>
    </Box>
  )
}

export default WithAdminAuth(AdminData)
