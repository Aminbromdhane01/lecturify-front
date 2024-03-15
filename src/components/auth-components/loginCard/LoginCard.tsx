'use client'

import { Grid, IconButton, InputAdornment, OutlinedInput, Typography } from "@mui/material"
import { useState } from "react"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ActionButton from "@/layouts/Button/ActionButton";
import Input from "@/layouts/Input/Input";
import LoginOptions from "../loginOptions/LoginOptions";
import AccountCheckMessage from "../accountCheckMessage/AccountCheckMessage";
import Link from "next/link";
import Toast from "@/toasts/Toast";
import { SubmitHandler, useForm } from "react-hook-form";
import CardTitle from "../cardTitle/CardTitle";
const LoginCard = () => {

    type Input = {
        login: string
        password: string
    }

    const handleLoginClick = () => {
        setShowToast(true)
    };

    const handleClickShowPassword = () => { setShowPassword(!showPassword) }
    const [showPassword, setShowPassword] = useState(false)
    const [isDisabled, setDisabled] = useState(false)
    const [showToast, setShowToast] = useState(false)

    const { register, handleSubmit, watch } = useForm<Input>(

    )
    const onSubmit: SubmitHandler<Input> = (data) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3} >
                <Grid item xs={12} marginTop={2}>
                    <CardTitle variant="h3" align="left">Login</CardTitle>
                </Grid>
                <Grid item xs={12} >
                    <Link href={'signup'}> <AccountCheckMessage variant="body1" align="right" onClick={handleLoginClick} >Don't you have an account ?</AccountCheckMessage></Link>
                </Grid>

                <Grid item xs={12}>

                    <Input

                        type="email"
                        placeholder="Enter Your Email"
                        label="Email"
                        error=""
                        name="input"
                    />
                </Grid>
                <Grid item xs={12}>

                    <OutlinedInput
                        placeholder="Enter Your Email"
                        {...register('login')}
                        fullWidth

                    >
                    </OutlinedInput >
                </Grid>


                <Grid item xs={12}>
                    <Input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value=""
                        placeholder="Enter Your Password"
                        label="Password"
                        error=""
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
                    <ActionButton content="Login" variant="contained" disabled={isDisabled} />
                </Grid>
                {showToast && <Toast />}
            </Grid>
        </form>

    )
}

export default LoginCard
