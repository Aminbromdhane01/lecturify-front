import LoginCard from '@/features/auth/LoginCard/LoginCard'
import AuthWrapper from '@/layouts/AuthWrapper/AuthWrapper'

import React from 'react'

const Login = () => {
    return (
        <AuthWrapper card={<LoginCard />} />
    )
}

export default Login
