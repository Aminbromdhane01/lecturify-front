import ResetPasswordCard from '@/components/auth-components/resetPasswordCard/ResetPasswordCard'
import AuthWrapper from '@/layouts/AuthWrapper/AuthWrapper'
import React from 'react'

const ResetPassword = () => {
    return (
        <AuthWrapper card={<ResetPasswordCard />} />
    )
}

export default ResetPassword