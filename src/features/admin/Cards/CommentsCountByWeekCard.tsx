'use client'
import { useLazyGetCommentsAddedThisWeekCountQuery } from '@/RTK/api/AdminApi';
import AdminDashboardCard from '@/components/AdminDashboardCard/AdminDashboardCard'
import React, { useEffect } from 'react'

const CommentsCountByWeekCard = () => {
    const [fetch ,{ data, error, isLoading }] = useLazyGetCommentsAddedThisWeekCountQuery();
    useEffect(()=>{
      fetch()
    },[])

  return (
    <AdminDashboardCard bgColor='#e55353' value={data as number} title={'Total Comments This Week'}/>
  )
}

export default CommentsCountByWeekCard
