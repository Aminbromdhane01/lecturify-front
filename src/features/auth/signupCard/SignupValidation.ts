import { constants } from "@/utils/constants/constants";
import { z } from "zod";

export const signupValuesSchema = z.object({
    email: z.string().email({ message: constants.ValidationMessages.EMAIL_VALIDATION_MESSAGE }),
    password: z.string().regex(constants.ValidationMessages.PAASWORD_REG_EX,
        { message: constants.ValidationMessages.PASSWORD_VALIDATION_MESSAGE }),
    confirmPassword: z.string(),
    firstname: z.string().min(1, { message: constants.ValidationMessages.FIRST_NAME_VALIDATION_MESSAGE }),
    lastname: z.string().min(1, { message: constants.ValidationMessages.LAST_NAME_VALIDATION_MESSAGE }),
}).refine(data => data.password === data.confirmPassword, {
    message: constants.ValidationMessages.PASSWORD_DO_NOT_MATCH_MESSAGE,
    path: ['confirmPassword']
});