import { constants } from "@/utils/constants/constants";
import { z } from "zod";

export const loginValuesSchema = z.object({
    email: z.string().email({ message: constants.EMAIL_VALIDATION_MESSAGE }),
    password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{":;'?\/><.,])(?=.*[^a-zA-Z\d\s:;'?\/><.,]).{8,}$/,
        { message: constants.PASSWORD_VALIDATION_MESSAGE })
});