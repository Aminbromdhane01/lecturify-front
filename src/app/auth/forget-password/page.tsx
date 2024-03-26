import ForgetPasswordCard from '@/features/auth/forgetPasswordCard/ForgetPasswordCard'
import AuthWrapper from '@/layouts/AuthWrapper/AuthWrapper'
import React from 'react'

const ForgetPassword = () => {
    return (
        <AuthWrapper card={<ForgetPasswordCard />} />
    )
}

export default ForgetPassword