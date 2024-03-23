import { constants } from "@/utils/constants/constants";
import { z } from "zod";

export const resetPasswordValuesSchema = z.object({
    newPassword: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{":;'?\/><.,])(?=.*[^a-zA-Z\d\s:;'?\/><.,]).{8,}$/,
        { message: constants.PASSWORD_VALIDATION_MESSAGE }),
    confirmPassword: z.string(),
}).refine(data => data.newPassword === data.confirmPassword, {
    message: constants.PASSWORD_DO_NOT_MATCH_MESSAGE,
    path: ['confirmPassword']
});