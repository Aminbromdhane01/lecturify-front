import LoginCard from '@/components/auth-components/loginCard/LoginCard'
import AuthWrapper from '@/layouts/AuthWrapper/AuthWrapper'

import React from 'react'

const page = () => {
    return (
        <AuthWrapper card={<LoginCard />} />
    )
}

export default page
