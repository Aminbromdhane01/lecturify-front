export interface UserData {
    email: string;
    password: string;
    lastname: string;
    firstname: string;
}

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    userId: string;
    fullName: string;
    email: string;
}
export interface ResetPasswordData {
    token: string;
    password: string;
    confirmPassword: string;
}
export interface forgetPasswordData {
    email: string;
}
export interface PasswordUpdateResponse {
    message: string;
}
