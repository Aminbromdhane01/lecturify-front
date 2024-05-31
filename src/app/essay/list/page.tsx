'use client'
import Essays from '@/components/Essays/Essays'
import WithAuthorAuth from '@/utils/WithAuthorAuth'
import React from 'react'

const EsaaysList = () => {
  return (
    <Essays/>
  )
}

export default WithAuthorAuth(EsaaysList)