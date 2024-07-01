import { endpoints } from "@/utils/endpoints";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../BasequerywithAuth";
import { Login } from "@/features/auth/LoginCard/login.type";

interface UserData {
    email: string;
    password: string;
    lastname: string;
    firstname: string;
}

interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    userId: string;
    fullName: string;
    email: string;
    role? : string
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
        login: builder.mutation<AuthResponse, Login>({
            query: (credentials) => ({
                url: endpoints.SIGNIN_URL,
                method: endpoints.POST_METHOD,
                body: credentials
            }),


        }),
        signup: builder.mutation<AuthResponse, UserData>({
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
        }),
    })
})

export const { useLoginMutation, useSignupMutation, useResetPasswordMutation, useForgetPasswordMutation } = authApi;