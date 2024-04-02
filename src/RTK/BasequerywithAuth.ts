import { setTokens } from "@/helpers/setToken";
import { baseQuery } from "./Basaquery.config";
import { useRefreshTokenQuery } from "./api/RefreshTokenApi";

export const baseQueryWithAuth = async (args: any, api: any, extraOptions: any) => {
    try {
        return await baseQuery(args, api, extraOptions);
    } catch (error: any) {
        if (error.status === 401 && error.data === 'invalidTokenResponse') {
            const { data } = await useRefreshTokenQuery()
            if (data && data.accessToken && data.refreshToken) {
                setTokens({ accessToken: data.accessToken, refreshToken: data.refreshToken })
                return await baseQuery(args, api, extraOptions);
            }
        }
        throw error;
    }
};
