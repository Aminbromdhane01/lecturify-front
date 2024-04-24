'use client'

import { CircularProgress, Grid, IconButton, InputAdornment, OutlinedInput, Stack, Typography } from "@mui/material"
import { useState } from "react"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ActionButton from "@/layouts/Button/ActionButton";
import Input from "@/layouts/Input/Input";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "@/RTK/api/AuthApi";
import { useRouter } from "next/navigation";
import ControlledAlert from "@/components/Alert/ControllerdAlert";
import { palette } from "@/theme/palette";
import LoginOptions from "@/components/loginOptions/LoginOptions";
import AccountCheckMessage from "@/components/AccountCheckMessage/AccountCheckMessage";
import { loginValuesSchema } from "./LoginValidation";
import { LoginType } from "./login.type";
import { endpoints } from "@/utils/endpoints";
import useAlert from "@/hooks/useAlert";
import { setTokens } from "@/helpers/setToken";
import Image from "next/image";

const LoginCard = () => {


    const handleClickShowPassword = () => { setShowPassword(!showPassword) }
    const [showPassword, setShowPassword] = useState(false)
    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<LoginType>(
        { resolver: zodResolver(loginValuesSchema) }
    )
    const router = useRouter();

    const [loginMutation, { data: response, isLoading, isError, isSuccess, error }] = useLoginMutation();
    const onSubmit: SubmitHandler<LoginType> = async (data) => {
        await loginMutation(data);
    }
    if (isSuccess) {
        if (response?.accessToken) {
            setTokens({ accessToken: response?.accessToken, refreshToken: response?.refreshToken })
            router.push('/');
        }

    }
    const { open, alertMessage, handleCloseAlert } = useAlert(isError, error);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3} >
                <Grid item xs={12}>
                    <Stack direction={'row'} alignItems={'center'}>
                        <Image src={'/login.svg'} alt='Book Form Image' height={70} width={100} />
                        <Typography variant="h5" color={palette.darkCharcoalText} fontWeight={'bold'} >Login</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} >
                    <Link href={endpoints.SIGNUP_VUE_URL}> <AccountCheckMessage variant="body1" align="right" >Don't you have an account ?</AccountCheckMessage></Link>
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
                    <LoginOptions href={endpoints.FORGET_PASSWORD_VUE_URL} />
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
