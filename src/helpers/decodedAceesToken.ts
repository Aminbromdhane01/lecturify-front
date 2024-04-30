import { decodeToken } from "./decodeToken"
import { getAccessToken } from "./getAccessToekn"

export const decodeAccesToken =  () => {

    const token =  getAccessToken()
    return decodeToken(token as string)
}