import { constants } from "@/utils/constants/constants";

export const getAccessToken = (): string | null => {
    return localStorage.getItem(constants.Authorization.ACCESS_TOKEN);
}
