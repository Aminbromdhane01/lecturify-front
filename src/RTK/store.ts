'use client'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './api/AuthApi'
import { refreshApi } from './api/RefreshTokenApi'
import userReducer from './slices/UserSlice'
import bookReducer from './slices/BookSlice'
import serachReducer from './slices/SearchBookSlice'
import alertReducer from './slices/AlertSlice'
import essayReducer from './slices/EssaySlice'
import profileReducer from './slices/ProfileSlice'

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { bookApi } from './api/BookApi'
import { adminApi } from './api/AdminApi'
import { recommendationApi } from './api/RecommandationApi'
import { textToSpeechApi } from './api/TextToSpeechApi'
import { essayApi } from './api/EssayApi'
import { commentApi } from './api/CommentApi'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reviewApi } from './api/ReviewApi'
import { profileApi } from './api/ProfileApi'
import { authorApi } from './api/AuthorApi'
import { categoryApi } from './api/CategoryApi'
import { notificationApi } from './api/NotificationApi'


const persistConfig = {
    key: "user",
    storage,
    blacklist: ["setUser" , "search" , "alert"]

}

const rootReducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    [refreshApi.reducerPath]: refreshApi.reducer,
    [bookApi.reducerPath] : bookApi.reducer,
    [adminApi.reducerPath] : adminApi.reducer,
    [recommendationApi.reducerPath] : recommendationApi.reducer,
    [essayApi.reducerPath] : essayApi.reducer,
    [commentApi.reducerPath] : commentApi.reducer,
    [reviewApi.reducerPath] : reviewApi.reducer,
    [profileApi.reducerPath] : profileApi.reducer,
    [authorApi.reducerPath] : authorApi.reducer,
    [categoryApi.reducerPath] : categoryApi.reducer,
    [notificationApi.reducerPath] : notificationApi.reducer,
    
    user: userReducer,
    book: bookReducer ,
    search : serachReducer,
    alert : alertReducer,
    essay  : essayReducer,
    profil : profileReducer

})
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(authApi.middleware ,refreshApi.middleware , bookApi.middleware ,adminApi.middleware ,recommendationApi.middleware , essayApi.middleware , commentApi.middleware , reviewApi.middleware , profileApi.middleware , authorApi.middleware , categoryApi.middleware , notificationApi.middleware)
})


setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>


