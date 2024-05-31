import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../BasequerywithAuth";
import { endpoints } from "@/utils/endpoints";
import { CreateEssayDto, Essay, UpdateEssayDto } from "./types/essay-api.types";
import { number } from "zod";


export const essayApi = createApi({
    reducerPath: 'essays',
    baseQuery: baseQueryWithAuth,
    tagTypes: ['Essay', 'UnreviewedEssays', 'UserEssay' , 'DeleteEssay' , 'UpdateEssay' , 'GetEssay'],
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
        getUnreviewedEssays: builder.query<{essays :Essay[] , total : number}, { itemPerPage?: number; page?: number}>({
            query: ({ page, itemPerPage }) => `${endpoints.GET_UNREVIEWED_ESSAY_URL}?page=${page}&itemPerPage=${itemPerPage}`,
            providesTags: ['UnreviewedEssays'],
        }),
        getUserEssay: builder.query<Essay[], number>({
            query: (userId) => `${endpoints.GET_USER_ESSAY_URL}/${userId}`,
            providesTags: ['UserEssay']
        }),
        getEssayById: builder.query<Essay, number>({
            query: (essayId) => `${endpoints.GET_ESSAY_URL}/${essayId}`,
            providesTags: ['GetEssay']
        }),
        
    }),
});

export const {
    useCreateEssayMutation,
    useDeleteEssayMutation,
    useUpdateEssayMutation,
    useLazyGetUnreviewedEssaysQuery,
    useGetUserEssayQuery,
    useLazyGetEssayByIdQuery,
} = essayApi;