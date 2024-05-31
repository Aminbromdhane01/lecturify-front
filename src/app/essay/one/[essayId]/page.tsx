'use client'
import EssayDetailsPage from '@/components/EssayDetailsPage/EssayDetails'
import WithAuth from '@/utils/WithAuth'
import React from 'react'

const EssayDeatils = ({ params }: { params: { essayId: number } }) => {
  return (
   <EssayDetailsPage essayId={params.essayId} />
  )
}

export default WithAuth(EssayDeatils)