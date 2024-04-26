import { constants } from "@/utils/constants/constants";
import { z } from "zod";

export const ForgetPasswordValuesSchema = z.object({
    email: z.string().email({ message: constants.ValidationMessages.EMAIL_VALIDATION_MESSAGE }),
});