import { constants } from "@/utils/constants/constants";
import { z } from "zod";

export const resetPasswordValuesSchema = z.object({
    password: z.string().regex(constants.ValidationMessages.PAASWORD_REG_EX,
        { message: constants.ValidationMessages.PASSWORD_VALIDATION_MESSAGE }),
    confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
    message: constants.ValidationMessages.PASSWORD_DO_NOT_MATCH_MESSAGE,
    path: ['confirmPassword']
});