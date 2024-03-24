import FieldAppbar from '@/components/home/nav-bar/FieldAppbar';
import TopBar from '@/components/home/top-bar/TopBar';
import React from 'react'
import styles from './home.module.css'
const HomeLayout = (
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) => {
    return (
        <main className={styles.content}>
            <TopBar />
            <FieldAppbar />
            {children}
        </main>
    )
}

export default HomeLayout