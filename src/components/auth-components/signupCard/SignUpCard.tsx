'use client'

import { Grid, IconButton, InputAdornment, Typography } from "@mui/material"
import { useState } from "react"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ActionButton from "@/layouts/Button/ActionButton";
import Input from "@/layouts/Input/Input";
import { palette } from "@/theme/palette";

const SingUpCard = () => {

    const handleBlur = () => {
        console.log('blur');
    }
    const handleChange = (event: any) => {
        console.log(event.target.value);
    }
    const handleClickShowPassword = () => { setShowPassword(!showPassword) }
    const handleClickShowConfirmPassword = () => { setShowConfirmPassword(!showConfirmPassword) }

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const [isDisabled, setDisabled] = useState(false)

    return (
        <Grid container spacing={5} >
            <Grid item xs={12} marginTop={2}>
                <Typography variant="h3" align="left" fontWeight={'bold'} color={palette.text3}>Sign Up</Typography>
            </Grid>

            <Grid container item xs={12} spacing={2}>

                <Grid item xs={6}>
                    <Input
                        type="text"
                        value=""
                        name="fname"

                        placeholder="Enter Your First Name"
                        label="First Name"

                    />
                </Grid>
                <Grid item xs={6}>
                    <Input
                        type="text"
                        value=""
                        name="lname"

                        placeholder="Enter Your Last Name"
                        label="Last Name"

                    />
                </Grid>

            </Grid>

            <Grid item xs={12}>
                <Input
                    type="email"
                    value=""
                    name="email"

                    placeholder="Enter Your Email"
                    label="Email"

                />
            </Grid>

            <Grid item xs={12}>
                <Input
                    type={showPassword ? "text" : "password"}
                    value=""
                    name="password"

                    placeholder="Enter Your Password"
                    label="Password"

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
                    name="confirm-password"

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
                />
            </Grid>


            <Grid item xs={12}>
                <ActionButton content="Sign Up" variant="contained" disabled={isDisabled} />
            </Grid>
        </Grid>

    )
}

export default SingUpCard