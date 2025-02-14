'use client'

import { CircularProgress, Grid, IconButton, InputAdornment, Stack, Typography } from "@mui/material"
import { useState } from "react"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ActionButton from "@/layouts/Button/ActionButton";
import Input from "@/layouts/Input/Input";
import { palette } from "@/theme/palette";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useSignupMutation } from "@/RTK/api/AuthApi";
import ControlledAlert from "@/components/Alert/ControllerdAlert";
import { signupValuesSchema } from "./SignupValidation";
import { SignupType } from "./signup.type";
import { setTokens } from "@/helpers/setToken";
import useAlert from "@/hooks/useAlert";
import { useDispatch } from "react-redux";
import { setUser } from "@/RTK/slices/UserSlice";
import Image from "next/image";


const SingUpCard = () => {

    const handleClickShowPassword = () => { setShowPassword(!showPassword) }
    const handleClickShowConfirmPassword = () => { setShowConfirmPassword(!showConfirmPassword) }

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const router = useRouter();

    const [signUpMutation, { data: response, isLoading, isError, isSuccess, error }] = useSignupMutation();
    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<SignupType>(
        { resolver: zodResolver(signupValuesSchema) }
    )
    const dispatch = useDispatch();


    const onSubmit: SubmitHandler<SignupType> = async (data) => {
        const { confirmPassword, ...restData } = data;
        await signUpMutation(restData)
        console.log(restData);

    }
    if (isSuccess) {


        if (response?.accessToken && response?.refreshToken) {
            dispatch(setUser({ userId: response.userId, email: response.email, fullName: response.fullName }))
            setTokens({ accessToken: response?.accessToken, refreshToken: response?.refreshToken })
            console.log(response);
            router.push('/home');
        }
    }


    const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
        event.preventDefault();
    }
    const { open, alertMessage, handleCloseAlert } = useAlert(isError, error);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={5} >
                <Grid item xs={12} marginTop={2}>
                    <Stack direction={'row'} alignItems={'center'}>
                        <Image src={'/signup.svg'} alt='Book Form Image' height={70} width={100} />
                        <Typography variant="h5" color={palette.darkCharcoalText} fontWeight={'bold'} >Signup</Typography>
                    </Stack>
                </Grid>

                <Grid container item xs={12} spacing={2}>

                    <Grid item xs={6}>
                        <Input
                            type="text"
                            register={register('firstname')}
                            placeholder="Enter Your First Name"
                            label="First Name"
                            err={errors.firstname ? errors.firstname.message : ''}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Input
                            type="text"
                            register={register('lastname')}
                            placeholder="Enter Your Last Name"
                            label="Last Name"
                            err={errors.lastname ? errors.lastname.message : ''}
                        />
                    </Grid>

                </Grid>

                <Grid item xs={12}>
                    <Input
                        register={register('email')}
                        name="email"
                        placeholder="Enter Your Email"
                        label="Email"
                        err={errors.email ? errors.email.message : ''}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Input
                        type={showPassword ? "text" : "password"}
                        register={register('password')}
                        placeholder="Enter Your Password"
                        label="Password" endAdornment={
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
                        err={errors.password ? errors.password.message : ''}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Input
                        onPaste={handlePaste}
                        type={showConfirmPassword ? "text" : "password"}
                        register={register('confirmPassword')}
                        placeholder="Enter Your Password"
                        label="Confirm Password"
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
                        err={errors.confirmPassword ? errors.confirmPassword.message : ''}
                    />
                </Grid>


                <Grid item xs={12}>
                    <ActionButton content={isLoading ? <CircularProgress /> : 'SignUp'} variant="contained" disabled={isSubmitting} />
                </Grid>
                {open && <ControlledAlert open={open} handleClose={handleCloseAlert} duration={3000} content={alertMessage} severity="error" />}
            </Grid>
        </form>

    )
}

export default SingUpCard