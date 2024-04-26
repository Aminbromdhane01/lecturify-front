'use client'

import { z } from "zod";
import { constants } from "@/utils/constants/constants";


export const bookValidationSchema = z.object({
    title: z.string().min(1, { message: constants.BookForm.TITLE_IS_REQUIRED_MESSAGE }),
    genre: z.string().min(1, { message: constants.BookForm.GENRE_IS_REQUIRES_MESSAGE }),
    authorId: z.string().min(1, { message: constants.BookForm.AUTHOR_IS_REQUIRED_MESSAGE }),
    pages: z.string().min(1, { message: constants.BookForm.NUMBER_OF_PAGES_IS_REQUIRED_MESSAGE }),

});
export const bookValidationFormTwoSchema = z.object({
    description: z.string().min(1, { message: constants.BookForm.DESCRIPTION_IS_REQUIRED_MESSAGE }),
    cover: z
        .instanceof(FileList || null)
        .optional()
        .refine((file) => {
            if (file)
                return !file || file[0].size <= constants.BookForm.BOOK_IMAGE_SIZE;
        }, constants.BookForm.BOOK_IMAGE_SIZE_MESSAGE)
        .refine((file) => {
            if (file)
                return constants.BookForm.ACCEPTED_FILE_TYPES.includes(file[0].type);
        }, constants.BookForm.IMAGE_TYPE_MESSAGE),   
    content: z.instanceof(FileList || null).optional()
        .refine((file) => {
            return !file || file[0].size <= 50 * 1024 * 1024;
        }, constants.BookForm.BOOK_PDF_SIZE_MESSAGE)
        .refine((file) => {
            if (file)
                return constants.BookForm.PDF_TYPE.includes(file[0].type);
        }, constants.BookForm.PDF_TYPE_MESSAGE),
});