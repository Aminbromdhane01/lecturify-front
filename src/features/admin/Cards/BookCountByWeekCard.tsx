'use client'
import { useLazyGetBooksAddedThisWeekQuery } from '@/RTK/api/AdminApi';
import AdminDashboardCard from '@/components/AdminDashboardCard/AdminDashboardCard'
import { palette } from '@/theme/palette';
import React, { useEffect } from 'react'

const BookCountByWeekCard = () => {
    const [fetch ,{ data, error, isLoading }] = useLazyGetBooksAddedThisWeekQuery();
    useEffect(()=>{
      fetch()
    },[])

  return (
    <AdminDashboardCard bgColor={palette.azure} value={data as number} title={'Total Published Books This Week'}/>
  )
}

export default BookCountByWeekCard
