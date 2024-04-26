import { constants } from "@/utils/constants/constants";

export const getRefreshToken = (): string | null => {
    return localStorage.getItem(constants.Authorization.REFRESH_TOKEN);
}
