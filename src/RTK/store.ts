'use client'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './api/AuthApi'
import { refreshApi } from './api/RefreshTokenApi'


export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [refreshApi.reducerPath]: refreshApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, refreshApi.middleware)
})


setupListeners(store.dispatch)