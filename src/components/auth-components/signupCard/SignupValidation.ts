import { constants } from "@/utils/consatnts/constants";
import { z } from "zod";

export const signupValuesSchema = z.object({
    email: z.string().email({ message: constants.EMAIL_VALIDATION_MESSAGE }),
    password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{":;'?\/><.,])(?=.*[^a-zA-Z\d\s:;'?\/><.,]).{8,}$/,
        { message: constants.PASSWORD_VALIDATION_MESSAGE }),
    confirmPassword: z.string(),
    firstname: z.string().min(1, { message: constants.FIRST_NAME_VALIDATION_MESSAGE }),
    lastname: z.string().min(1, { message: constants.LAST_NAME_VALIDATION_MESSAGE }),
}).refine(data => data.password === data.confirmPassword, {
    message: constants.PASSWORD_DO_NOT_MATCH_MESSAGE,
    path: ['confirmPassword']
});