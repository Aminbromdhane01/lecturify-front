import { constants } from "@/utils/consatnts/constants";
import { z } from "zod";

export const loginValuesSchema = z.object({
    login: z.string().email({ message: constants.EMAIL_VALIDATION_MESSAGE }),
});