import { constants } from "@/utils/constants/constants";
import { z } from "zod";

export const loginValuesSchema = z.object({
    email: z.string().email({ message: constants.ValidationMessages.EMAIL_VALIDATION_MESSAGE }),
    password: z.string().regex(constants.ValidationMessages.PAASWORD_REG_EX,
        { message: constants.ValidationMessages.PASSWORD_VALIDATION_MESSAGE })
});