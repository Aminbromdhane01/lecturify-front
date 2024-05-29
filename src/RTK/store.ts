'use client'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './api/AuthApi'
import { refreshApi } from './api/RefreshTokenApi'
import userReducer from './slices/UserSlice'
import bookReducer from './slices/BookSlice'
import serachReducer from './slices/SearchBookSlice'
import alertReducer from './slices/AlertSlice'
import essayReducer from './slices/EssaySlice'

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { bookApi } from './api/BookApi'
import { adminApi } from './api/AdminApi'
import { recommendationApi } from './api/RecommandationApi'
import { textToSpeechApi } from './api/TextToSpeechApi'
import { essayApi } from './api/EssayApi'
import { commentApi } from './api/CommentApi'


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
    [textToSpeechApi.reducerPath] : textToSpeechApi.reducer,
    [essayApi.reducerPath] : essayApi.reducer,
    [commentApi.reducerPath] : commentApi.reducer,
    user: userReducer,
    book: bookReducer ,
    search : serachReducer,
    alert : alertReducer,
    essay  : essayReducer

})
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(authApi.middleware, refreshApi.middleware , bookApi.middleware , adminApi.middleware , recommendationApi.middleware , textToSpeechApi.middleware , essayApi.middleware , commentApi.middleware)
})


setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>


