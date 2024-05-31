import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../BasequerywithAuth";
import { endpoints } from "@/utils/endpoints";
import { CreateReviewDto, Review } from "./types/review.api.types";

export const reviewApi = createApi({
    reducerPath: 'reviewApi',
    baseQuery: baseQueryWithAuth,
    tagTypes: ['Review'],
    endpoints: (builder) => ({
        createReview: builder.mutation<Review, CreateReviewDto>({
            query: (createReviewDto) => ({
                url: endpoints.REVIEW_URL,
                method: endpoints.POST_METHOD,
                body: createReviewDto,
            }),
            invalidatesTags: ['Review'],
        }),
    }),
});

export const {
    useCreateReviewMutation,
} = reviewApi;