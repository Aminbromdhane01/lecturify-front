'use client'
import { authSlice } from '@/features/auth/api/AuthSlice'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'


export const store = configureStore({
    reducer: {
        [authSlice.reducerPath]: authSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authSlice.middleware)
})


setupListeners(store.dispatch)