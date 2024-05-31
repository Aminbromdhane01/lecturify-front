import { decodeToken } from "./decodeToken"
import { getAccessToken } from "./getAccessToekn"

export const decodeAccesToken =  () => {

    const token =  getAccessToken()
    if (token) {
        return decodeToken(token as string)
    }
    return null
}