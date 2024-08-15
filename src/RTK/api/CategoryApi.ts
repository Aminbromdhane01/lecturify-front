interface Category {
    id: number;
    type: string 

}

export interface CreateCategoryDto {
    type: string 

}
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../BasequerywithAuth";

export const categoryApi = createApi({
    reducerPath: 'categories',
    baseQuery: baseQueryWithAuth,
    tagTypes: ['Category', 'Categories', 'DeleteCategory'],
    endpoints: (builder) => ({
        createCategory: builder.mutation<Category, CreateCategoryDto>({
            query: (createCategoryDto) => ({
                url: '/categories',
                method: 'POST',
                body: createCategoryDto,
            }),
            invalidatesTags: ['Category'],
        }),
        deleteCategory: builder.mutation<void, number>({
            query: (categoryId) => ({
                url: `/categories/${categoryId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['DeleteCategory'],
        }),
        getCategories: builder.query<Category[], void>({
            query: () => '/categories',
            providesTags: ['Categories'],
        }),
    }),
});

export const {
    useCreateCategoryMutation,
    useDeleteCategoryMutation,
    useLazyGetCategoriesQuery,
} = categoryApi;