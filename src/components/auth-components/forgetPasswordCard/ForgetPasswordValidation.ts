import { constants } from "@/utils/constants/constants";
import { z } from "zod";

export const loginValuesSchema = z.object({
    login: z.string().email({ message: constants.EMAIL_VALIDATION_MESSAGE }),
});