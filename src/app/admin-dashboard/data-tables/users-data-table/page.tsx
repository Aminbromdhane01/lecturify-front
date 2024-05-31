'use client'
import AdminTopBar from '@/components/AdminTopbar/AdminTopBar'
import BookDataTables from '@/features/admin/BookDataTables.tsx/BookDataTables'
import UserDataTable from '@/features/admin/UserDataTable'
import WithAdminAuth from '@/utils/WithAdminAuth'
import { Box } from '@mui/material'
import React from 'react'

const AdminData = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}> 
       <AdminTopBar/>
       <UserDataTable/>
    </Box>
  )
}

export default WithAdminAuth(AdminData)
