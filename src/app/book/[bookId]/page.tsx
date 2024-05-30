"use client"
import { useGetBookByIdQuery } from '@/RTK/api/BookApi';
import BookDetails from '@/pages/BookDeatails/BookDetails'
import { constants } from '@/utils/constants/constants';
import React from 'react'

const Book = ({ params } : {params : {bookId : number}}) => {
    const { data: book, isLoading, refetch , isSuccess } =  useGetBookByIdQuery(params.bookId);
     return (
        isSuccess && <BookDetails title={book.title as string} author={constants.BookForm.MOCK_AUTHOR} publicationDate={book.date as string} rating={book.rating as string} numberofVotes={13}
            description={constants.BookForm.MOCK_DESCRIPTION} />

    )
}

export default Book