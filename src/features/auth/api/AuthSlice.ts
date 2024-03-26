import { LoginType } from "@/components/auth-components/loginCard/login.type";
import { constants } from "@/utils/constants/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Credentials {
    email: string;
    password: string;
}

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


const getAccessToken = (): string | null => {
    return localStorage.getItem('accessToken');
}


const baseQuery = fetchBaseQuery({
    baseUrl: constants.BASE_URL,
    prepareHeaders: (headers) => {
        const token = getAccessToken();
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

export const authSlice = createApi({ //authApi instead of slice 
    reducerPath: 'auth',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        login: builder.mutation<Response, LoginType>({
            query: (credentials) => ({
                url: 'auth/singin',
                method: 'POST',
                body: credentials
            }),


        }),
        signup: builder.mutation<Response, UserData>({
            query: (userData) => ({
                url: 'auth/signup',
                method: 'POST',
                body: userData
            })
        })
    })
})

export const { useLoginMutation, useSignupMutation } = authSlice;