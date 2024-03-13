import SingUpCard from '@/components/auth-components/signupCard/SignUpCard'
import AuthWrapper from '@/layouts/AuthWrapper/AuthWrapper'
import React from 'react'

const page = () => {
    return (
        <AuthWrapper card={<SingUpCard />} />
    )
}

export default page