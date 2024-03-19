import { constants } from "@/utils/consatnts/constants";
import { z } from "zod";

export const loginValuesSchema = z.object({
    login: z.string().email({ message: constants.EMAIL_VALIDATION_MESSAGE }),
    password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{":;'?\/><.,])(?=.*[^a-zA-Z\d\s:;'?\/><.,]).{8,}$/,
        { message: constants.PASSWORD_VALIDATION_MESSAGE })
});