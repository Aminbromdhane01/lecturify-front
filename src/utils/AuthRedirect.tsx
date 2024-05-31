'use client'
import { getAccessToken } from '@/helpers/getAccessToekn';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AuthRedirect = (WrappedComponent: any) => {
    const Wrapper = (props: any) => {
        const router = useRouter();
        useEffect(() => {
            const accessToken = getAccessToken()
            if (accessToken) {
                router.back()
            }

        }, []);
        return <WrappedComponent {...props} />;
    };

    return Wrapper;
};

export default AuthRedirect;