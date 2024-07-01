'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { endpoints } from '@/utils/endpoints';


export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push(endpoints.HOME_VUE_URL);
    }, []);

    return <></>;
}