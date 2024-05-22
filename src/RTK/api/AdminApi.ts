import { createApi } from "@reduxjs/toolkit/query/react";
import { endpoints } from "@/utils/endpoints";
import { baseQueryWithAuth } from "../BasequerywithAuth";
interface BookCountByMonth {
    month: string;
    count: number;
  }
  interface CommentCountBySentiment {
    sentiment: string;
    count: number;
  }
  interface BookGroupedByGenre {
    genre: string;
    count: number;
}  
export const adminApi = createApi({
    reducerPath: 'admin',
    baseQuery: baseQueryWithAuth,
    tagTypes: ['totalBookCount', 'booksAddedThisWeek', 'commentsCount', 'commentsAddedThisWeek' , 'bookCountByMonth' , 'commentCountBySentiment' ,'booksGroupedByGenre'],
    endpoints: (builder) => ({
        getTotalBookCount: builder.query<number, void>({
            query: () => ({
                url: endpoints.ADMIN_TOTAL_BOOK_COUNT_URL,
                method: endpoints.GET_METHOD,
            }),
            providesTags: ['totalBookCount'],
        }),
        getBooksAddedThisWeek: builder.query<number, void>({
            query: () => ({
                url: endpoints.ADMIN_BOOKS_ADDED_THIS_WEEK_URL,
                method: endpoints.GET_METHOD,
            }),
            providesTags: ['booksAddedThisWeek'],
        }),
        getCommentsCount: builder.query<number, void>({
            query: () => ({
                url: endpoints.ADMIN_COMMENTS_COUNT_URL,
                method: endpoints.GET_METHOD,
            }),
            providesTags: ['commentsCount'],
        }),
        getCommentsAddedThisWeekCount: builder.query<number, void>({
            query: () => ({
                url: endpoints.ADMIN_COMMENTS_ADDED_THIS_WEEK_COUNT_URL,
                method: endpoints.GET_METHOD,
            }),
            providesTags: ['commentsAddedThisWeek'],
        }),
        getBookCountByMonth: builder.query<BookCountByMonth[], void>({
            query: () => ({
                url: endpoints.ADMIN_BOOK_COUNT_BY_MONTH_URL,
                method: endpoints.GET_METHOD,
            }),
            providesTags: ['bookCountByMonth']
        }),
        getCommentCountsBySentiments: builder.query<CommentCountBySentiment[], void>({
            query: () => ({
              url: endpoints.ADMIN_COMMENTS_COUNTS_BY_SENTIMENTS_URL,
              method: endpoints.GET_METHOD,
            }),
            providesTags: ['commentCountBySentiment']
          }),
          getBooksGroupedByGenre: builder.query<BookGroupedByGenre[], void>({
            query: () => ({
                url: endpoints.ADMIN_BOOKS_GROUPED_BY_GENRE_URL,
                method: endpoints.GET_METHOD,
            }),
            providesTags: ['booksGroupedByGenre']
        }),  
    }),
});

export const {
    useLazyGetTotalBookCountQuery,
    useLazyGetBooksAddedThisWeekQuery,
    useLazyGetCommentsCountQuery,
    useLazyGetCommentsAddedThisWeekCountQuery,
    useLazyGetBookCountByMonthQuery,
    useLazyGetCommentCountsBySentimentsQuery,
    useLazyGetBooksGroupedByGenreQuery
} = adminApi;