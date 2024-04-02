'use client'
import { CircularProgress, Grid, Typography } from "@mui/material"
import ActionButton from "@/layouts/Button/ActionButton";
import Input from "@/layouts/Input/Input";
import { ForgetPassword } from "./forget-password.type";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgetPasswordValuesSchema } from "./ForgetPasswordValidation";
import { useForgetPasswordMutation } from "@/RTK/api/AuthApi";
import ControlledAlert from "@/components/Alert/ControllerdAlert";
import useAlert from "@/hooks/useAlert";
import { palette } from "@/theme/palette";
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
                    <Typography variant="h3" align="left" fontWeight={'bold'} color={palette.darkCharcoalText}>Forget Password</Typography>
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
                {open && <ControlledAlert open={open} handleClose={handleCloseAlert} duration={3000} content={alertMessage} severity="success" />}
                {isOpen && <ControlledAlert open={isOpen} handleClose={handleCloseEroorAlert} duration={3000} content={errorMessage} severity="error" />}

            </Grid>
        </form>

    )
}

export default ForgetPasswordCard
