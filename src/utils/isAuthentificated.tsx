import { RootState } from "@/RTK/store";
import { decodeToken } from "@/helpers/decodeToken";
import { getAccessToken } from "@/helpers/getAccessToekn"
import { useSelector } from "react-redux";

export const isAuthentificated = () => {

    const accessToken = getAccessToken() as string;
    return accessToken


}