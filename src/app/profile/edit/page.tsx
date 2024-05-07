import EditProfileForm from '@/features/profile/edit-profile/EditProfileForm'
import AuthWrapper from '@/layouts/AuthWrapper/AuthWrapper'
import React from 'react'

const page = () => {
  return (
    <>
    <AuthWrapper card={<EditProfileForm/>}/>
    </>
  )
}

export default page
