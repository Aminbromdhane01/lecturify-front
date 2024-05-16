"use client"
import { useGetBookByIdQuery } from '@/RTK/api/BookApi';
import BookDetails from '@/pages/BookDeatails/BookDetails'
import { constants } from '@/utils/constants/constants';
import React from 'react'

const Book = ({ params } : {params : {bookId : number}}) => {
    const { data: book, isLoading, refetch , isSuccess } =  useGetBookByIdQuery(params.bookId);
    console.log(book);
    
   

    return (
        isSuccess && <BookDetails title={book.title as string} author={'Author'} publicationDate={book.date as string} rating={book.rating} numberofVotes={13}
            description={constants.BookForm.MOCK_DESCRIPTION} />

    )
}

export default Book