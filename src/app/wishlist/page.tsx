'use client'
import WishListDataTable from '@/features/wishlist/WishListDataTable'
import WithAuth from '@/utils/WithAuth'
import { Box } from '@mui/material'
import React from 'react'

const WishList = () => {
  return (
    <>
      <WishListDataTable/>
    </>
  )
}

export default WithAuth(WishList)