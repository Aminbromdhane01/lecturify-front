import { constants } from "@/utils/constants/constants";

export const deleteTokens = (): void => {
    localStorage.removeItem(constants.Authorization.ACCESS_TOKEN);
    localStorage.removeItem(constants.Authorization.REFRESH_TOKEN);
}