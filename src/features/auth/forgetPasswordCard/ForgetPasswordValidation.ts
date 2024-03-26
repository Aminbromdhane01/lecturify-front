import { constants } from "@/utils/constants/constants";
import { z } from "zod";

export const ForgetPasswordValuesSchema = z.object({
    login: z.string().email({ message: constants.EMAIL_VALIDATION_MESSAGE }),
});