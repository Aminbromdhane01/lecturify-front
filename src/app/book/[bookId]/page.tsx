"use client"
import { useGetBookByIdQuery } from '@/RTK/api/BookApi';
import BookDetails from '@/pages/BookDeatails/BookDetails'
import React from 'react'

const Book = ({ params } : {params : {bookId : number}}) => {
    const { data: book, isLoading, refetch , isSuccess } =  useGetBookByIdQuery(params.bookId);
    console.log(book);
    
   

    return (
        isSuccess && <BookDetails title={book.title as string} author={'Author'} publicationDate={book.date as string} rating={book.rating} numberofVotes={13}
            description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi non doloribus minus, aliquam eveniet eum possimus dolor, voluptas dignissimos sunt laborum quidem! Enim animi explicabo similique mollitia voluptatem perspiciatis voluptates! Cum odit, autem nesciunt sit pariatur quisquam quam quas neque libero enim nihil molestias accusantium nam nostrum numquam repellendus sed dolorum amet exercitationem est. Itaque facilis ducimus perspiciatis nisi earum! Maiores, id dicta rem voluptatem voluptates distinctio quibusdam necessitatibus animi ipsum minus praesentium at aliquid velit voluptatum iusto quisquam, voluptate, nam nobis! Cumque, modi id facilis error nihil repudiandae veritatis? Amet fugiat, porro eligendi aliquam earum vitae repudiandae repellat tempora reprehenderit repellendus. Ratione vitae officiis quam ad repellat perferendis excepturi iste quo tempore. Itaque earum temporibus adipisci natus sit quidem.'} />

    )
}

export default Book