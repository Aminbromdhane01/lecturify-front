export const constants = {
    ValidationMessages: {
        PASSWORD_VALIDATION_MESSAGE: 'Password must contain at least 8 characters including uppercase, lowercase, numbers, and special characters',
        EMAIL_VALIDATION_MESSAGE: 'Invalid email format',
        PASSWORD_DO_NOT_MATCH_MESSAGE: 'Password do not match',
        FIRST_NAME_VALIDATION_MESSAGE: 'First name cannot be empty',
        LAST_NAME_VALIDATION_MESSAGE: 'Last name cannot be empty',
        BASE_URL: 'http://localhost:3000',
        PAASWORD_REG_EX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{":;'?\/><.,])(?=.*[^a-zA-Z\d\s:;'?\/><.,]).{8,}$/
    },
    Authorization: {
        ACCESS_TOKEN: 'accessToken',
        REFRESH_TOKEN: 'refreshToken'
    }

}