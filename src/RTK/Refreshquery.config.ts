import { getRefreshToken } from "@/helpers/getRefreshToken";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const refreshQuery = fetchBaseQuery({
    baseUrl: process.env.BASE_URL,
    prepareHeaders: (headers) => {
        const Refreshtoken = getRefreshToken()
        if (Refreshtoken) {
            headers.set('Authorization', `Bearer ${Refreshtoken}`);
        }
        return headers;
    },
});