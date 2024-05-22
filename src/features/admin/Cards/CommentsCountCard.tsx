'use client'
import { useLazyGetCommentsCountQuery } from '@/RTK/api/AdminApi';
import AdminDashboardCard from '@/components/AdminDashboardCard/AdminDashboardCard'
import React, { useEffect } from 'react'

const CommentsCountCard = () => {
    const [fetch,{ data, error, isLoading }] = useLazyGetCommentsCountQuery();
    useEffect(() =>{
      fetch()
    },[])

  return (
    <AdminDashboardCard bgColor='#f9b115' value={data as number} title={'Total Comments'}/>
  )
}

export default CommentsCountCard