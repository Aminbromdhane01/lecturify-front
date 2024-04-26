export type ResetPassword = {
    password: string;
    confirmPassword: string;
}
export type ResetPasswordProps = {
    token: string;
}