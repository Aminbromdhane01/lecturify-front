'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { endpoints } from './endpoints';
import { getAccessToken } from '@/helpers/getAccessToekn';
import { useSelector } from 'react-redux';
import { RootState } from '@/RTK/store';

const withAuth = <T extends Record<string, unknown>>(WrappedComponent: React.ComponentType<T>) => {
  const Wrapper = (props: T) => {
    const router = useRouter();
    const [authChecked, setAuthChecked] = useState(false); // New state variable



    useEffect(() => {
      const accessToken = getAccessToken()
      if (!accessToken) {
        router.replace(endpoints.SIGNIN_VUE_URL);
      }
      setAuthChecked(true);
    }, []);


    if (!authChecked) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;