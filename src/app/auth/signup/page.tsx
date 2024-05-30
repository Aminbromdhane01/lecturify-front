"use client"
import SingUpCard from '@/features/auth/SignupCard/SignUpCard'
import AuthWrapper from '@/layouts/AuthWrapper/AuthWrapper'
import { AuthCardType } from '@/layouts/AuthWrapper/auth-wrapper.enum'
import AuthRedirect from '@/utils/loginRedirect'
import React from 'react'

const SignUp = () => {
    return (
        <AuthWrapper card={'signup'} />
    )
}

export default SignUp