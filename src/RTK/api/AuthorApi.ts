import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../BasequerywithAuth";

interface Author {
    id : number;
    name : string;
    biography : string;
}
export interface CreateAuthorDto {
    name : string;
    biography : string;
}

export const authorApi = createApi({
    reducerPath: 'authors',
    baseQuery: baseQueryWithAuth,
    tagTypes: ['Author','Authors', 'DeleteAuthor', ],
    endpoints: (builder) => ({
        createAuthor: builder.mutation<Author, CreateAuthorDto>({
            query: (createAuthorDto) => ({
                url: '/authors',
                method: 'POST',
                body: createAuthorDto,
            }),
            invalidatesTags: ['Author'],
        }),
        deleteAuthor: builder.mutation<void, number>({
            query: (authorId) => ({
                url: `/authors/${authorId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['DeleteAuthor'],
        }),
    
        getAuthors: builder.query<Author[], void>({
            query: () => '/authors',
            providesTags: ['Authors'],
        }),
       
    }),
});

export const {
    useCreateAuthorMutation,
    useDeleteAuthorMutation,
    useLazyGetAuthorsQuery,
    
} = authorApi;