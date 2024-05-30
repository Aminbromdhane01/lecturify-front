import { createApi } from "@reduxjs/toolkit/query/react";
import { endpoints } from "@/utils/endpoints";
import { baseQueryWithAuth } from "../BasequerywithAuth";
import { BookRecommendation, RecommendationQueryParams } from "./types/recommandation-api.types";



export const recommendationApi = createApi({
    reducerPath: 'recommendation',
    baseQuery: baseQueryWithAuth,
    tagTypes: ['recommendation'],
    endpoints: (builder) => ({
        getRecommendations: builder.query<BookRecommendation[], RecommendationQueryParams>({
            query: ({query}) => ({
                url: `${endpoints.RECOMMENDATION_URL}?query=${query}`,
                method: endpoints.GET_METHOD,
            }),
            providesTags: ['recommendation'],
        }),
    }),
});

export const {
    useLazyGetRecommendationsQuery
} = recommendationApi;