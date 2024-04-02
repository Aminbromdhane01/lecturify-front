import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginType } from "../../features/auth/LoginCard/login.type";
import { baseQuery } from "@/RTK/Basaquery.config";
import { endpoints } from "@/utils/endpoints";
import { baseQueryWithAuth } from "../BasequerywithAuth";

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
interface ResetPasswordData {
    token: string;
    password: string;
    confirmPassword: string;
}
interface forgetPasswordData {
    email: string;
}
interface PasswordUpdateResponse {
    message: string;
}


export const authApi = createApi({ //authApi instead of slice 
    reducerPath: 'auth',
    baseQuery: baseQueryWithAuth,
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
        }),
        resetPassword: builder.mutation<PasswordUpdateResponse, ResetPasswordData>({
            query: (resetPasswordData) => ({
                url: endpoints.RESET_PASSWORD_URL,
                method: endpoints.PUT_METHOD,
                body: resetPasswordData
            })
        }),
        forgetPassword: builder.mutation<PasswordUpdateResponse, forgetPasswordData>({
            query: (forgetPasswordData) => ({
                url: endpoints.FORGET_PASSWORD_URL,
                method: endpoints.POST_METHOD,
                body: forgetPasswordData
            })
        })
    })
})

export const { useLoginMutation, useSignupMutation, useResetPasswordMutation, useForgetPasswordMutation } = authApi;