import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Comment, CreateCommentDto, UpdateCommentDto } from './types/comment-api.types';
import { baseQueryWithAuth } from '../BasequerywithAuth';

 
export const commentApi = createApi({
  reducerPath: 'commentApi',
  baseQuery: baseQueryWithAuth, // Adjust the base URL as per your backend setup
  endpoints: (builder) => ({
    createComment: builder.mutation<Comment, CreateCommentDto>({
      query: (createCommentDto) => ({
        url: `/comment`,
        method: 'POST',
        body: createCommentDto,
      }),
    }),
    getCommentsByBookId: builder.query<Comment[], number>({
      query: (bookId) => `/comment/getbybookid/${bookId}`,
    }),
    deleteComment: builder.mutation<number, number>({
      query: (commentId) => ({
        url: `/comment/${commentId}`,
        method: 'DELETE',
      }),
    }),
    updateComment: builder.mutation<Comment | null, { commentId: number, updateCommentDto: UpdateCommentDto }>({
      query: ({ commentId, updateCommentDto }) => ({
        url: `/comment/${commentId}`,
        method: 'PATCH',
        body: updateCommentDto,
      }),
    }),
  }),
});

export const {
  useCreateCommentMutation,
  useGetCommentsByBookIdQuery,
  useDeleteCommentMutation,
  useUpdateCommentMutation,
} = commentApi;