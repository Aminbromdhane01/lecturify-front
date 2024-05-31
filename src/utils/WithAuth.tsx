'use client'
import { useRouter } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';
import { endpoints } from './endpoints';
import { getAccessToken } from '@/helpers/getAccessToekn';




const WithAuth = (WrappedComponent: any) => {

  const Wrapper = (props: any) => {
    const router = useRouter();
    const [authChecked, setAuthChecked] = useState(false);

    useLayoutEffect(() => {
      const accessToken = getAccessToken() as string;
      if (!accessToken) {
        router.replace(endpoints.SIGNIN_VUE_URL);
      } else {
        setAuthChecked(true);
      }
    }, []);

    if (!authChecked) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default WithAuth;