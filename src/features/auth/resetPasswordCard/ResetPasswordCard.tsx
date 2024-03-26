'use client'

import { CircularProgress, Grid, IconButton, InputAdornment, Typography } from "@mui/material"
import { useState } from "react"
import ActionButton from "@/layouts/Button/ActionButton";
import Input from "@/layouts/Input/Input";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordValuesSchema } from "./ResetPasswordValidation";
import { SubmitHandler, useForm } from "react-hook-form";
import { ResetPassword } from "./rest-password.type";
import { palette } from "@/theme/palette";

const ForgetPasswordCard = () => {


    const handleClickShowPassword = () => { setShowPassword(!showPassword) }
    const handleClickShowConfirmPassword = () => { setShowConfirmPassword(!showConfirmPassword) }

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<ResetPassword>(
        { resolver: zodResolver(resetPasswordValuesSchema) }
    )

    const onSubmit: SubmitHandler<ResetPassword> = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={5} >
                <Grid item xs={12} marginTop={2}>
                    <Typography variant="h3" align="left" color={palette.text3} fontWeight={'bold'} >Reset Password</Typography>
                </Grid>


                <Grid item xs={12}>
                    <Input
                        type={showPassword ? "text" : "password"}
                        register={register('newPassword')}
                        placeholder="Enter Your Password"
                        label="New Password"
                        err={errors.newPassword ? errors.newPassword.message : ''}
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
                    <Input
                        type={showConfirmPassword ? "text" : "password"}
                        register={register('confirmPassword')}
                        placeholder="Enter Your Password"
                        label="Confirm Password"
                        err={errors.newPassword ? errors.newPassword.message : ''}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowConfirmPassword}
                                    edge="end"
                                    size="medium"
                                >
                                    {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </Grid>
                <Grid item xs={12}>
                    <ActionButton content={isSubmitting ? <CircularProgress /> : 'Login'} variant="contained" disabled={isSubmitting} />
                </Grid>
            </Grid>
        </form>

    )
}

export default ForgetPasswordCard
