'use client'
import { useLazyGetBooksAddedThisWeekQuery } from '@/RTK/api/AdminApi';
import AdminDashboardCard from '@/components/AdminDashboardCard/AdminDashboardCard'
import React, { useEffect } from 'react'

const BookCountByWeekCard = () => {
    const [fetch ,{ data, error, isLoading }] = useLazyGetBooksAddedThisWeekQuery();
    useEffect(()=>{
      fetch()
    },[])

  return (
    <AdminDashboardCard bgColor='#3399ff' value={data as number} title={'Total Published Books This Week'}/>
  )
}

export default BookCountByWeekCard
