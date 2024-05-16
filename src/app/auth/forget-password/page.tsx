"use client"
import ForgetPasswordCard from '@/features/auth/ForgetPasswordCard/ForgetPasswordCard'
import AuthWrapper from '@/layouts/AuthWrapper/AuthWrapper'
import AuthRedirect from '@/utils/loginRedirect'
import React from 'react'

const ForgetPassword = () => {
    return (
        <AuthWrapper card={'forget-password'} />
    )
}

export default AuthRedirect(ForgetPassword)