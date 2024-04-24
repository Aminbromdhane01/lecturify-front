export const constants = {
    ValidationMessages: {
        PASSWORD_VALIDATION_MESSAGE: 'Password must contain at least 8 characters including uppercase, lowercase, numbers, and special characters',
        EMAIL_VALIDATION_MESSAGE: 'Invalid email format',
        PASSWORD_DO_NOT_MATCH_MESSAGE: 'Password do not match',
        FIRST_NAME_VALIDATION_MESSAGE: 'First name cannot be empty',
        LAST_NAME_VALIDATION_MESSAGE: 'Last name cannot be empty',
        BASE_URL: 'http://localhost:3000',
        PAASWORD_REG_EX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{":;'?\/><.,])(?=.*[^a-zA-Z\d\s:;'?\/><.,]).{8,}$/,
    },
    Authorization: {
        ACCESS_TOKEN: 'accessToken',
        REFRESH_TOKEN: 'refreshToken'
    },
    BookForm: {
        ADD_BOOK_FORM_STEPS: ['Book Details ', 'Content Form'],
        TITLE_IS_REQUIRED_MESSAGE: "Title is required.",
        DESCRIPTION_IS_REQUIRED_MESSAGE: "Description is required",
        GENRE_IS_REQUIRES_MESSAGE: "Genre is required.",
        AUTHOR_IS_REQUIRED_MESSAGE: "Author is required.",
        NUMBER_OF_PAGES_IS_REQUIRED_MESSAGE: "Number of Pages is required and must be a positive integer.",
        BOOK_IMAGE_SIZE: 3 * 1024 * 1024,
        BOOK_IMAGE_SIZE_MESSAGE: 'Image size must be less than 3MB',
        ACCEPTED_FILE_TYPES: ['image/png', 'image/jpeg , image/jpg'],
        PDF_TYPE: ['application/pdf'],
        BOOK_PDF_SIZE_MESSAGE: 'File size must be less than 3MB',
        IMAGE_TYPE_MESSAGE: 'File must be a PNG/JPEG/JPG',
        PDF_TYPE_MESSAGE: 'File must be a PDF'


    }


}