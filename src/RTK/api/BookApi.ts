import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseQueryWithAuth } from '../BasequerywithAuth';
import { BookState } from '../slices/BookSlice';

interface Book {
    id?: string |null | undefined;
    userId : number |null |undefined
    title: string |null | undefined;
    genre: string |null | undefined;
    pages: number |null | undefined;
    authorId?: number |null | undefined;
    description: string |null | undefined;
    files: File | null | undefined;
    filestwo : File | null | undefined;
    
}

export const bookApi = createApi({
    reducerPath: 'books',
    baseQuery: baseQueryWithAuth, 
    tagTypes: ['Book'],
    endpoints: (builder) => ({
        getBooks: builder.query<{data :Book[] , count : number}, { page?: number; itemPerPage?: number; keyword?: string }>({
          query: ({ page = 0, itemPerPage = 3, keyword = '' }) =>
            `/books?itemPerPage=${itemPerPage}&page=${page}&keyword=${keyword}`,
          providesTags: ['Book'],
        }),
        createBook: builder.mutation<BookState, Book>({
            query: (book) => {
                
              const formData = new FormData();
              formData.append('description' , book.description as string)
              formData.append('title' , book.title as string)
              formData.append('files' , book.files)
              formData.append('files' , book.filestwo)
              formData.append('userId', book.userId )
              formData.append('genre' , book.genre)
              formData.append('page', book.pages)
              return {
                url: '/books',
                method: 'POST',
                body: formData,
                headers: {
                    
                  },}
            },
            invalidatesTags: ['Book'],
        }),
    }),
});

export const { useGetBooksQuery, useCreateBookMutation } = bookApi;
