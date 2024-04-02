"use client"
import ResetPasswordCard from '@/features/auth/ResetPasswordCard/ResetPasswordCard'
import AuthWrapper from '@/layouts/AuthWrapper/AuthWrapper'
import AuthRedirect from '@/utils/loginRedirect'
import React from 'react'
import { useRouter } from 'next/navigation'


const ResetPassword = ({ params }: { params: { token: string } }) => {
    return (
        <AuthWrapper card={<ResetPasswordCard token={params.token} />} />
    )
}

export default AuthRedirect(ResetPassword)