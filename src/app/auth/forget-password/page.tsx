"use client"
import AuthWrapper from '@/layouts/AuthWrapper/AuthWrapper'
import { AuthCardType } from '@/layouts/AuthWrapper/auth-wrapper.enum'
import AuthRedirect from '@/utils/loginRedirect'
import React from 'react'

const ForgetPassword = () => {
    return (
        <AuthWrapper card={AuthCardType.ForgetPassword} />
    )
}

export default AuthRedirect(ForgetPassword)