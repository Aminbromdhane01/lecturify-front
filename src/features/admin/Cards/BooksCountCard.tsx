'use client'
import { useLazyGetTotalBookCountQuery } from '@/RTK/api/AdminApi';
import AdminDashboardCard from '@/components/AdminDashboardCard/AdminDashboardCard'
import { palette } from '@/theme/palette';
import React, { useEffect } from 'react'

const BooksCountCard = () => {
    const [fetch,{ data, error, isLoading }] = useLazyGetTotalBookCountQuery();
    useEffect(()=>{
        fetch()
    },[])
    
  return (
    <AdminDashboardCard bgColor={palette.blueMagneta} value={data as number} title={'Total Published Books'}/>
  )
}

export default BooksCountCard