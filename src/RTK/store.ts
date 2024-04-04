'use client'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './api/AuthApi'
import { refreshApi } from './api/RefreshTokenApi'
import userReducer from './slices/UserSlice'


export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [refreshApi.reducerPath]: refreshApi.reducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, refreshApi.middleware)
})


setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>


