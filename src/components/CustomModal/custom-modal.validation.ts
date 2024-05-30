import { constants } from "@/utils/constants/constants";
import { z } from "zod";

export const formDataSchema = z.object({
    title: z.string().min(1, constants.EssayModule.TITLE_IS_REQUIRED).max(100, constants.EssayModule.TITLE_LENGTH_MESSAGE),
  });