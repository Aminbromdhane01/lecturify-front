'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useLayoutEffect, useState } from 'react';
import { endpoints } from './endpoints';
import { getAccessToken } from '@/helpers/getAccessToekn';
import { useSelector } from 'react-redux';
import { RootState } from '@/RTK/store';
import { decodeToken } from '@/helpers/decodeToken';



const withAuth = <T extends Record<string, unknown>>(WrappedComponent: React.ComponentType<T>) => {

  const Wrapper = (props: T) => {
    const router = useRouter();
    const user = useSelector((state: RootState) => state.user);
    const [authChecked, setAuthChecked] = useState(false);
    useLayoutEffect(() => {
      const accessToken = getAccessToken() as string
      if (!accessToken) {
        router.replace(endpoints.SIGNIN_VUE_URL);
      }
      else {
        const decodedToken = decodeToken(accessToken);
        console.log(decodedToken);
        console.log(user.email);
        if (decodedToken.username != user.email) {
          router.replace(endpoints.SIGNIN_VUE_URL);
        }


      }


      setAuthChecked(true);
    }, []);


    if (!authChecked) {
      return (null)
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;