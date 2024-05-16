import { mock } from "node:test";

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
        PDF_TYPE_MESSAGE: 'File must be a PDF',
        NO_BOOKS_FOUND_EN : 'No books found',
        NO_BOOKS_FOUND_MESSAGE_ONE : "We couldn't find any matches for",
        NO_BOOKS_FOUND_MESSAGE_TWO : "among our available titles. You might want to explore other categories or refine your search terms to discover relevant books",
        MOCK_DESCRIPTION : `Discover a hidden bookstore in the heart of New York City. Step inside to find rows of books, each containing tales of love, courage, and mystery. Lose yourself in forgotten classics and hidden gems, and join lively discussions with fellow readers. Immerse yourself in the magic of literature and embark on an unforgettable adventure through the pages of its books.`

    },
    AuthForm : {
        FORGET_PASSWORD_EN : 'Forget Password'
    },
    MenuItems : {
        PROFILE_EN : 'Profile',
        WISHLIST_EN : 'Wishlist',
        ADD_BOOK_EN : 'Add New Book',
        SETTINGS_EN : 'Settings'
    },
    TopBar : {
       BACK: 'Back',
       HOME: 'Home',
       COMPLETE_YOUR_PROFILE : 'Complete Your Profile'
    },
    Alert : {
     ALERT_POP_UP_TIMER : 3000
    },
    Profile : {
     MOCK_ADRESS : 'Adress',
     MOCK_PUBLISHED_BOOKS : 'Published Books Total : 20' ,
     MOCK_PUBLISHED_WORKS : 'Published Work Total : 20' ,
     AVERAGE_BOOK_RATING : 'Average Book Rating'
    }


}