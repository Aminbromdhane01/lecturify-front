import { constants } from "@/utils/consatnts/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getUsersSlice = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({ baseUrl: constants.BASE_URL }),
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => 'users'
        })
    })
})

export const { useGetBooksQuery } = getUsersSlice;