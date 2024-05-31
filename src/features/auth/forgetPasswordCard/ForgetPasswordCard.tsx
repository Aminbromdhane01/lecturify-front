'use client'
import { useForgetPasswordMutation } from "@/RTK/api/AuthApi";
import ControlledAlert from "@/components/ControlledAlert/ControllerdAlert";
import useAlert from "@/hooks/useAlert";
import ActionButton from "@/layouts/Button/ActionButton";
import Input from "@/layouts/Input/Input";
import { palette } from "@/theme/palette";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircularProgress, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { ForgetPasswordValuesSchema } from "./ForgetPasswordValidation";
import { ForgetPassword } from "./forget-password.type";
const ForgetPasswordCard = () => {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<ForgetPassword>(
        { resolver: zodResolver(ForgetPasswordValuesSchema) }
    )
    const [ForgetPasswordMutation, { data: response, isLoading, isError, isSuccess, error }] = useForgetPasswordMutation();
    const onSubmit: SubmitHandler<ForgetPassword> = async (data) => {
        await ForgetPasswordMutation(data)
    }
    const { open, alertMessage, handleCloseAlert } = useAlert(isSuccess, response);
    const { open: isOpen, alertMessage: errorMessage, handleCloseAlert: handleCloseEroorAlert } = useAlert(isError, error);



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={5} >
                <Grid item xs={12} marginTop={2}>
                    <Stack direction={'row'} alignItems={'center'}>
                        <Image src={'/forget-password.svg'} alt='Book Form Image' height={70} width={100} />
                        <Typography variant="h5" color={palette.darkCharcoalText} fontWeight={'bold'} >Forget Password</Typography>
                    </Stack>
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
                    <ActionButton content={isLoading ? <CircularProgress /> : 'Send'} variant="contained" disabled={isSubmitting} />
                </Grid>
                {open && <ControlledAlert open={open} handleClose={handleCloseAlert} duration={6000} content={alertMessage} severity="success" />}
                {isOpen && <ControlledAlert open={isOpen} handleClose={handleCloseEroorAlert} duration={3000} content={errorMessage} severity="error" />}

            </Grid>
        </form>

    )
}

export default ForgetPasswordCard
