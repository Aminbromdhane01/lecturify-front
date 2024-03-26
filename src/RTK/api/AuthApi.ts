import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginType } from "../../features/auth/LoginCard/login.type";
import { baseQuery } from "@/RTK/Basaquery.config";
import { endpoints } from "@/utils/endpoints";

interface UserData {
    email: string;
    password: string;
    lastname: string;
    firstname: string;
}

interface Response {
    accessToken: string;
    refreshToken: string;
}


export const authApi = createApi({ //authApi instead of slice 
    reducerPath: 'auth',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        login: builder.mutation<Response, LoginType>({
            query: (credentials) => ({
                url: endpoints.SIGNIN_URL,
                method: endpoints.POST_METHOD,
                body: credentials
            }),


        }),
        signup: builder.mutation<Response, UserData>({
            query: (userData) => ({
                url: endpoints.SIGNUP_URL,
                method: endpoints.POST_METHOD,
                body: userData
            })
        })
    })
})

export const { useLoginMutation, useSignupMutation } = authApi;