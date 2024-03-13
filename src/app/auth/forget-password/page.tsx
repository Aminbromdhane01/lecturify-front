import ForgetPasswordCard from '@/components/auth-components/forgetPasswordCard/ForgetPasswordCard'
import AuthWrapper from '@/layouts/AuthWrapper/AuthWrapper'
import React from 'react'

const page = () => {
    return (
        <AuthWrapper card={<ForgetPasswordCard />} />
    )
}

export default page