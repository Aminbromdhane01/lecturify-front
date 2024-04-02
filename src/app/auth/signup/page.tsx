"use client"
import SingUpCard from '@/features/auth/SignupCard/SignUpCard'
import AuthWrapper from '@/layouts/AuthWrapper/AuthWrapper'
import AuthRedirect from '@/utils/loginRedirect'
import React from 'react'

const SignUp = () => {
    return (
        <AuthWrapper card={<SingUpCard />} />
    )
}

export default AuthRedirect(SignUp)