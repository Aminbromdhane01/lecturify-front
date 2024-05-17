import EditProfileForm from '@/features/profile/edit-profile/EditProfileForm'
import AuthWrapper from '@/layouts/AuthWrapper/AuthWrapper'
import { AuthCardType } from '@/layouts/AuthWrapper/auth-wrapper.enum'
import React from 'react'

const page = () => {
  return (
    <>
    <AuthWrapper card={AuthCardType.EditProfile}/>
    </>
  )
}

export default page
