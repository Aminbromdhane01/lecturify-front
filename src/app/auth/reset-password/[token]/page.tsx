"use client"
import AuthWrapper from '@/layouts/AuthWrapper/AuthWrapper'
import AuthRedirect from '@/utils/loginRedirect'


const ResetPassword = ({ params }: { params: { token: string } }) => {
    return (
        <AuthWrapper token={params.token} card={'reset-password'} />
    )
}

export default AuthRedirect(ResetPassword)