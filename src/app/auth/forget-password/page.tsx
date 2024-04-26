"use client"
import ForgetPasswordCard from '@/features/auth/ForgetPasswordCard/ForgetPasswordCard'
import AuthWrapper from '@/layouts/AuthWrapper/AuthWrapper'
import AuthRedirect from '@/utils/loginRedirect'
import React from 'react'

const ForgetPassword = () => {
    return (
        <AuthWrapper card={<ForgetPasswordCard />} />
    )
}

export default AuthRedirect(ForgetPassword)