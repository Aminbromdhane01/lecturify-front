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
        MOCK_DESCRIPTION : `Discover a hidden bookstore in the heart of New York City. Step inside to find rows of books, each containing tales of love, courage, and mystery. Lose yourself in forgotten classics and hidden gems, and join lively discussions with fellow readers. Immerse yourself in the magic of literature and embark on an unforgettable adventure through the pages of its books.`,
        MOCK_AUTHOR : 'Author'

    },
    AuthForm : {
        FORGET_PASSWORD_EN : 'Forget Password'
    },
    MenuItems : {
        PROFILE_EN : 'Profile',
        WISHLIST_EN : 'Wishlist',
        ADD_BOOK_EN : 'Add New Book',
        SETTINGS_EN : 'Settings',
        ESSAY_EN : 'Write Your essay',
        RECOMMANDATION_EN : 'AI Recommandation'
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
     AVERAGE_BOOK_RATING : 'Average Book Rating',
     PROFILE_INFO_CARD_TITLE : 'User Infos' ,
     BOOK_INFO_CARD_TITLE :'Last Published Book',
     PROFILE_UPDATED_MESSAGE : 'Your profile is updated'
    },
    ProfileImage : {
        PROFILE_IMAGE_ALT : 'Profile Image',
        DEFAULT_PROFILE_IMAGE_URL : 'https://www.w3schools.com/w3images/avatar2.png'
    },
    BookDetails : {
       ABOUT_BOOK_EN : 'About Book',
       DOWNLOAD_EN : 'Download',
       ADD_TO_WISHLIST : 'Add to wishlist',
       SEE_REVIEWS : 'See Reviews',
    },
    GenderRadioButton : {
       MALE : 'Male',
       FEMALE : 'Female',
    },
    AdminDashboard :{
      COMMENT_PIE_CHART_TITLE : 'Distribution of Comment Sentiments',
      BOOK_GENRE_CHART_TITLE : 'Distribution of Book Genres',
      LOADING_MESSAGE : 'Loading ...',
      ERROR_DATA_MESSAGE : 'Error loading data',
      BOOK_CHART_IMAGE_URL : '/stats_two.svg',
      BOOK_CHART_IMAGE_ALT : 'Stats Image',
      BOOK_TABLE_IMAGE_URL : '/book-admin.svg',
      BOOK_TABLE_IMAGE_TITLE : 'Books'
      


    },
    RecommandationModule : {
        MEN_VOICE_IMAAGE_URL : 'https://static.vecteezy.com/system/resources/previews/024/183/502/original/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg',
        WOMEN_VOICE_IMAGE_URL : 'https://static.vecteezy.com/system/resources/previews/002/002/297/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg',
        RECOMMANDATION_CARD_URL : 'https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg'
    },
    EssayModule : {
        FAILED_TO_COMMUNICATE_WITH_AZURE_MESSAGE:'Failed to communicate with the Azure OpenAI API',
        WELCOME_MESSAGE : 'Welcome to Lecturify',
        TITLE_IS_REQUIRED : 'Title is required',
        TITLE_LENGTH_MESSAGE : 'Title must be less than 100 characters'

    },
    CommentsModule : {
        NO_COMMENTS_MESSAGE : 'Be the first to comment! There are currently no comments.'
    }

}