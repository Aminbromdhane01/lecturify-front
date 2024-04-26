'use client'
import LoginCard from '@/features/auth/LoginCard/LoginCard'
import AuthWrapper from '@/layouts/AuthWrapper/AuthWrapper'
import AuthRedirect from '@/utils/loginRedirect'

import React from 'react'

const Login = () => {
    return (
        <AuthWrapper card={<LoginCard />} />
    )
}

export default AuthRedirect(Login)
