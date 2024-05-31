'use client'
import RecommandationPage from '@/components/RecommandationPage/RecommandationPage'
import { palette } from '@/theme/palette'
import WithAuth from '@/utils/WithAuth'
import { Box, Grid } from '@mui/material'
import React from 'react'

const Recommandation = () => {
  return (
  <RecommandationPage/>
 )
}

export default WithAuth(Recommandation)