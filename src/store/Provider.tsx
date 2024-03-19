'use client'
import { Provider } from "react-redux";
import { store } from "@/store/store";
import React from "react";

export default function RtkProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}