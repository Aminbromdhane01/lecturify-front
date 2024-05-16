'use client'
import React from 'react'
import styles from './home.module.css'
import BookPage from '@/pages/BookPage/BookPage';
const HomeLayout = (
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) => {
    return (
        <main className={styles.content}>
            {children}
            <BookPage />
        </main>
    )
}

export default HomeLayout