import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseQueryWithAuth } from '../BasequerywithAuth';
import { BookState } from '../slices/BookSlice';
import { constants } from '@/utils/constants/constants';
import { endpoints } from '@/utils/endpoints';

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
    date : Date | string | null | undefined;
    
}

export const bookApi = createApi({
    reducerPath: 'books',
    baseQuery: baseQueryWithAuth, 
    tagTypes: ['Book'],
    endpoints: (builder) => ({
        getBooks: builder.query<{data :Book[] , count : number}, { page?: number; itemPerPage?: number; keyword?: string }>({
          query: ({ page = 0, itemPerPage = 3, keyword = '' }) =>
            endpoints.ITEM_PER_PAGE_FILTER+itemPerPage+endpoints.PAGE_FILTER+page+endpoints.KEY_WORD_FILTER+keyword,
          providesTags: ['Book'],
        }),
        searchByTitle: builder.query<{data :Book[] , count : number}, { itemPerPage?: number; page?: number; keyword: string }>({
          query: ({ page = 0, itemPerPage = 5, keyword }) =>
            `${endpoints.BOOK_SEARCH_TITLE}?itemPerPage=${itemPerPage}&page=${page}&keyword=${keyword}`,
          providesTags: ['Book'],
        }),
        createBook: builder.mutation<BookState, Book>({
            query: (book) => {
                
              const formData = new FormData();
              formData.append('description' , book.description as string)
              formData.append('title' , book.title as string)
              formData.append('files' , book.files as File)
              formData.append('files' , book.filestwo as File)
              formData.append('userId', book.userId as unknown as string)
              formData.append('genre' , book.genre as string)
              formData.append('page', book.pages as unknown as string)
              return {
                url: endpoints.BOOK_URL,
                method: endpoints.POST_METHOD,
                body: formData,
                headers: {
                    
                  },}
            },
            invalidatesTags: ['Book'],
        }),
    }),
});

export const { useGetBooksQuery, useCreateBookMutation , useSearchByTitleQuery } = bookApi;
