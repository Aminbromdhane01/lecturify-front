import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../BasequerywithAuth";

export interface Notification {
  id : number ;
  content : string ;
  date : Date ;
  isRead : boolean ; 
}
interface UpdateNotificationDto {
  userId : number
}

export const notificationApi = createApi({
    reducerPath: 'notifications',
    baseQuery: baseQueryWithAuth,
    tagTypes: ['Notification', 'UserNotifications', 'MarkAllAsRead'],
    endpoints: (builder) => ({
        getUserNotifications: builder.query<Notification[], number>({
            query: (userId) => `/notification?userId=${userId}`,
            providesTags: ['UserNotifications'],
        }),
        markAllNotificationsAsRead: builder.mutation<number, UpdateNotificationDto>({
            query: ({ userId }) => ({
                url: '/notification',
                method: 'PATCH',
                body: { userId },
            }),
            invalidatesTags: ['UserNotifications', 'MarkAllAsRead'],
        }),
    }),
});

export const {
    useLazyGetUserNotificationsQuery,
    useMarkAllNotificationsAsReadMutation,
} = notificationApi;
