"use client"
import BookImage from '@/components/BookImage/BookImage'
import BookInfo from '@/components/BookInfo/BookInfo'
import LastReadBookInfo from '@/layouts/LastReadBookInfo/LastReadBookInfo'
import WithAuth from '@/utils/WithAuth'

import React from 'react'

const Home = () => {

    return (
        <LastReadBookInfo
           type='book_info' />
    )
}

export default WithAuth(Home)