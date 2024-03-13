'use client'

import { Grid, IconButton, InputAdornment, Typography } from "@mui/material"
import { useState } from "react"
import ActionButton from "@/layouts/Button/ActionButton";
import Input from "@/layouts/Input/Input";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const ForgetPasswordCard = () => {

    const handleBlur = () => {
        console.log('blur');
    }
    const handleChange = (event: any) => {
        console.log(event.target.value);
    }
    const [isDisabled, setDisabled] = useState(false)
    const handleClickShowPassword = () => { setShowPassword(!showPassword) }
    const handleClickShowConfirmPassword = () => { setShowConfirmPassword(!showConfirmPassword) }

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    return (
        <Grid container spacing={5} >
            <Grid item xs={12} marginTop={2}>
                <Typography variant="h3" align="left" fontWeight={'bold'} color={"#333"}>Reset Password</Typography>
            </Grid>


            <Grid item xs={12}>
                <Input
                    type={showPassword ? "text" : "password"}
                    value=""
                    name="reset-password"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    placeholder="Enter Your Password"
                    label="New Password"
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
                <Input
                    type={showConfirmPassword ? "text" : "password"}
                    value=""
                    name="confirm-reset-password"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    placeholder="Enter Your Password"
                    label="Confirm Password"
                    error=""
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
                <ActionButton content="Login" variant="contained" disabled={isDisabled} />
            </Grid>
        </Grid>

    )
}

export default ForgetPasswordCard
