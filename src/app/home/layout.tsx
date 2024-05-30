'use client'
import BookPage from '@/components/BookPage/BookPage';
import React from 'react';
import styles from './home.module.css';
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