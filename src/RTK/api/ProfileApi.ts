import { endpoints } from "@/utils/endpoints";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../BasequerywithAuth";

interface EditProfileData {
    picture?: File;
    gender?: boolean;
    adress?: string;
    phonenumber?: string;
}

interface EditProfileResponse {
    message: string;
}

export const profileApi = createApi({
    reducerPath: 'profile',
    baseQuery: baseQueryWithAuth,
    endpoints: (builder) => ({
        editProfile: builder.mutation<EditProfileResponse, { userId: string; editProfileData: EditProfileData }>({
            query: ({ userId, editProfileData }) => {
                const formData = new FormData();
                if (editProfileData.picture) formData.append('file', editProfileData.picture);
                if (editProfileData.gender !== undefined) formData.append('gender', editProfileData.gender);
                if (editProfileData.adress) formData.append('adress', editProfileData.adress);
                if (editProfileData.phonenumber) formData.append('phonenumber', editProfileData.phonenumber);
                

                return {
                    url: `${endpoints.USER_URL}/${userId}`,
                    method: endpoints.PATCH_METHOD,
                    body: formData,
                };
            },
            
        }),
        getUser: builder.query<EditProfileData, number>({
            query: (userId) => ({
                url: `${endpoints.USER_URL}/${userId}`,
                method: endpoints.GET_METHOD,
            }),
        }),
    }),
});

export const { useEditProfileMutation , useLazyGetUserQuery } = profileApi;