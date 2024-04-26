'use client'
import { Provider } from "react-redux";
import { store } from "@/RTK/store";
import React from "react";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import Loading from "@/pages/Laoding/Loading";

export default function RtkProvider({ children }: { children: React.ReactNode }) {
    let persistor = persistStore(store)
    return (
        <Provider store={store}>
            <PersistGate loading={<Loading />} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}