'use client'
import EditProfileForm from '@/features/profile/edit-profile/EditProfileForm'
import AuthWrapper from '@/layouts/AuthWrapper/AuthWrapper'
import { AuthCardType } from '@/layouts/AuthWrapper/auth-wrapper.enum'
import WithAuth from '@/utils/WithAuth'
import React from 'react'

const Edit = () => {
  return (
    <>
    <AuthWrapper card={AuthCardType.EditProfile}/>
    </>
  )
}

export default WithAuth(Edit)
