"use client"
import BookImage from '@/components/BookImage/BookImage'
import BookInfo from '@/components/BookInfo/BookInfo'
import LastReadBookInfo from '@/layouts/LastReadBookInfo/LastReadBookInfo'
import withAuth from '@/utils/auth'

import React from 'react'

const page = () => {

    return (
        <LastReadBookInfo
           type='book_info' />
    )
}

export default withAuth(page)