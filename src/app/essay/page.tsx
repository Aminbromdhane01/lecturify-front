'use client'
import EssayPage from '@/components/EssayPage/EssayPage'
import WithAuth from '@/utils/WithAuth'
import React from 'react'

const Essay = () => {
    return (
    <EssayPage/>
  )
}

export default WithAuth(Essay)