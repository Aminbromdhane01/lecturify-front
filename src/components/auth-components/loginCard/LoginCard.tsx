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
const LoginCard = () => {

    const handleClickShowPassword = () => { setShowPassword(!showPassword) }
    const [showPassword, setShowPassword] = useState(false)
    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<LoginType>(
        { resolver: zodResolver(loginValuesSchema) }
    )
    const onSubmit: SubmitHandler<LoginType> = async (data) => {
        await new Promise((resolve => { setTimeout(resolve, 2000) }))
        console.log(data);
    }

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
                        register={register('login')}
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
                    <ActionButton content={isSubmitting ? <CircularProgress /> : 'Login'} variant="contained" disabled={isSubmitting} />
                </Grid>

            </Grid>
        </form>

    )
}

export default LoginCard
