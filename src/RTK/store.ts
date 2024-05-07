'use client'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './api/AuthApi'
import { refreshApi } from './api/RefreshTokenApi'
import userReducer from './slices/UserSlice'
import bookReducer from './slices/BookSlice'
import serachReducer from './slices/SearchBookSlice'
import alertReducer from './slices/AlertSlice'

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { bookApi } from './api/BookApi'


const persistConfig = {
    key: "user",
    storage,
    blacklist: ["setUser" , "search" , "alert"]

}

const rootReducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    [refreshApi.reducerPath]: refreshApi.reducer,
    [bookApi.reducerPath] : bookApi.reducer,
    user: userReducer,
    book: bookReducer ,
    search : serachReducer,
    alert : alertReducer

})
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(authApi.middleware, refreshApi.middleware , bookApi.middleware)
})


setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>


