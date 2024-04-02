import { createApi } from "@reduxjs/toolkit/query/react";
import { refreshQuery } from "../Refreshquery.config";
import { endpoints } from "@/utils/endpoints";

interface refreshTokenResponse {
    accessToken: string;
    refreshToken: string;
}

export const refreshApi = createApi({
    reducerPath: 'api',
    baseQuery: refreshQuery,
    endpoints: (builder) => ({
        refreshToken: builder.query<refreshTokenResponse, void>({
            query: () => endpoints.REFRESH_TOKEN_URL,

        }),
    }),
});

export const { useRefreshTokenQuery } = refreshApi;


