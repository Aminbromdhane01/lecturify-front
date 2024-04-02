import { constants } from "@/utils/constants/constants";

interface tokens {
    accessToken: string;
    refreshToken: string;
}

export const setTokens = ({ accessToken, refreshToken }: tokens) => {
    localStorage.setItem(constants.Authorization.ACCESS_TOKEN, accessToken);
    localStorage.setItem(constants.Authorization.REFRESH_TOKEN, refreshToken);

}