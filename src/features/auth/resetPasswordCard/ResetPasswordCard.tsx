'use client'

import { CircularProgress, Grid, IconButton, InputAdornment, Stack, Typography } from "@mui/material"
import { useState } from "react"
import ActionButton from "@/layouts/Button/ActionButton";
import Input from "@/layouts/Input/Input";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { palette } from "@/theme/palette";
import { ResetPassword, ResetPasswordProps } from "./rest-password.type";
import { resetPasswordValuesSchema } from "./ResetPasswordValidation";
import { useResetPasswordMutation } from "@/RTK/api/AuthApi";
import { useRouter } from "next/navigation";
import useAlert from "@/hooks/useAlert";
import ControlledAlert from "@/components/Alert/ControllerdAlert";
import Image from "next/image";

const ResetPasswordCard = ({ token }: ResetPasswordProps) => {

    const router = useRouter();

    const handleClickShowPassword = () => { setShowPassword(!showPassword) }
    const handleClickShowConfirmPassword = () => { setShowConfirmPassword(!showConfirmPassword) }

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<ResetPassword>(
        { resolver: zodResolver(resetPasswordValuesSchema) }
    )
    const [resetPasswordMutation, { data: response, isLoading, isError, isSuccess, error }] = useResetPasswordMutation();
    const { open, alertMessage, handleCloseAlert } = useAlert(isError, error);


    const onSubmit: SubmitHandler<ResetPassword> = async (data) => {
        const ResetData = { ...data, token }
        await resetPasswordMutation(ResetData)
    }
    if (isSuccess) {
        router.push('/auth/login')
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={5} >
                <Grid item xs={12} marginTop={2}>
                    <Stack direction={'row'} alignItems={'center'}>
                        <Image src={'/change-password.svg'} alt='Book Form Image' height={70} width={100} />
                        <Typography variant="h5" color={palette.darkCharcoalText} fontWeight={'bold'} >Reset Password</Typography>
                    </Stack>
                </Grid>


                <Grid item xs={12}>
                    <Input
                        type={showPassword ? "text" : "password"}
                        register={register('password')}
                        placeholder="Enter Your Password"
                        label="New Password"
                        err={errors.password ? errors.password.message : ''}
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
                        err={errors.confirmPassword ? errors.confirmPassword.message : ''}
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
                    <ActionButton content={isSubmitting ? <CircularProgress /> : 'Reset Password'} variant="contained" disabled={isSubmitting} />
                </Grid>
                {open && <ControlledAlert open={open} handleClose={handleCloseAlert} duration={3000} content={alertMessage} severity="error" />}

            </Grid>
        </form>

    )
}

export default ResetPasswordCard
