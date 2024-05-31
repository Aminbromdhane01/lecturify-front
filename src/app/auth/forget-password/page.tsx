"use client"
import AuthWrapper from '@/layouts/AuthWrapper/AuthWrapper'
import { AuthCardType } from '@/layouts/AuthWrapper/auth-wrapper.enum'
import AuthRedirect from '@/utils/AuthRedirect'
import React from 'react'

const ForgetPassword = () => {
    return (
        <AuthWrapper card={"forget-password"} />
    )
}

export default AuthRedirect(ForgetPassword)