"use client"
import AuthWrapper from '@/layouts/AuthWrapper/AuthWrapper'
import AuthRedirect from '@/utils/AuthRedirect'

const SignUp = () => {
    return (
        <AuthWrapper card={'signup'} />
    )
}

export default AuthRedirect(SignUp)