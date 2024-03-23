'use client'

import { CircularProgress, Grid, IconButton, InputAdornment, OutlinedInput, Typography } from "@mui/material"
import { useState } from "react"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ActionButton from "@/layouts/Button/ActionButton";
import Input from "@/layouts/Input/Input";
import LoginOptions from "@/components/auth-components/loginOptions/LoginOptions";
import AccountCheckMessage from "@/components/auth-components/accountCheckMessage/AccountCheckMessage";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import CardTitle from "@/components/auth-components//cardTitle/CardTitle.styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValuesSchema } from "@/components/auth-components/loginCard/LoginValidation";
import { LoginType } from "@/components/auth-components/loginCard/login.type"
import { useLoginMutation } from "@/features/auth/api/AuthSlice";
import { useRouter } from "next/navigation";
import ControlledAlert from "@/components/alert/ControllerdAlert";
import useErrorAlert from "@/hooks/useErrorAlert";

const LoginCard = () => {


    const handleClickShowPassword = () => { setShowPassword(!showPassword) }
    const [showPassword, setShowPassword] = useState(false)
    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<LoginType>(
        { resolver: zodResolver(loginValuesSchema) }
    )
    const router = useRouter();

    const [loginMutation, { data: response, isLoading, isError, isSuccess, error }] = useLoginMutation();
    const onSubmit: SubmitHandler<LoginType> = async (data) => {
        console.log(data)
        await loginMutation(data);
    }
    if (isSuccess) {
        if (response?.accessToken) {
            localStorage.setItem('accessToken', response?.accessToken);
            router.push('/');
        }

    }
    const { open, alertMessage, handleCloseAlert } = useErrorAlert(isError, error);



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3} >
                <Grid item xs={12} marginTop={2}>
                    <CardTitle variant="h3" align="left">Login</CardTitle>
                </Grid>
                <Grid item xs={12} >
                    <Link href={'signup'}> <AccountCheckMessage variant="body1" align="right" >Don't you have an account ?</AccountCheckMessage></Link>
                </Grid>

                <Grid item xs={12}>
                    <Input

                        type="email"
                        placeholder="Enter Your Email"
                        label="Email"
                        register={register('email')}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Your Password"
                        label="Password"
                        register={register('password')}
                        err={errors.password ? errors.password.message : ""}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                    size="medium"
                                >
                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </Grid>

                <Grid item xs={12}>
                    <LoginOptions href="forget-password" />
                </Grid>

                <Grid item xs={12}>
                    <ActionButton content={isLoading ? <CircularProgress /> : 'Login'} variant="contained" disabled={isSubmitting} />
                </Grid>
                {open && <ControlledAlert open={open} handleClose={handleCloseAlert} duration={3000} content={alertMessage} severity="error" />}

            </Grid>
        </form>

    )
}

export default LoginCard
