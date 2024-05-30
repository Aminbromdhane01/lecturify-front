import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../BasequerywithAuth";
import { endpoints } from "@/utils/endpoints";
import { CreateEssayDto, Essay, UpdateEssayDto } from "./types/essay-api.types";


export const essayApi = createApi({
    reducerPath: 'essays',
    baseQuery: baseQueryWithAuth,
    tagTypes: ['Essay', 'UnreviewedEssays', 'UserEssay' , 'DeleteEssay' , 'UpdateEssay'],
    endpoints: (builder) => ({
        createEssay: builder.mutation<Essay, CreateEssayDto>({
            query: (createEssayDto) => ({
                url: endpoints.ESSAY_URL,
                method: endpoints.POST_METHOD,
                body: createEssayDto,
            }),
            invalidatesTags: ['Essay'],
        }),
        deleteEssay: builder.mutation<void, number>({
            query: (essayId) => ({
                url: `${endpoints.ESSAY_URL}/${essayId}`,
                method: endpoints.DELETE_METHOD,
            }),
            invalidatesTags: ['DeleteEssay'],
        }),
        updateEssay: builder.mutation<Essay, { essayId: number; updateEssayDto: UpdateEssayDto }>({
            query: ({ essayId, updateEssayDto }) => ({
                url: `${endpoints.ESSAY_URL}/${essayId}`,
                method: endpoints.PATCH_METHOD,
                body: updateEssayDto,
            }),
            invalidatesTags: ['UpdateEssay'],
        }),
        getUnreviewedEssays: builder.query<Essay[], void>({
            query: () => endpoints.GET_UNREVIEWED_ESSAY_URL,
            providesTags: ['UnreviewedEssays'],
        }),
        getUserEssay: builder.query<Essay[], number>({
            query: (userId) => `${endpoints.GET_USER_ESSAY_URL}/${userId}`,
            providesTags: ['UserEssay']
        }),
    }),
});

export const {
    useCreateEssayMutation,
    useDeleteEssayMutation,
    useUpdateEssayMutation,
    useGetUnreviewedEssaysQuery,
    useGetUserEssayQuery,
} = essayApi;