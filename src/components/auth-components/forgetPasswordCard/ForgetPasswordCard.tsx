'use client'

import { Grid, IconButton, InputAdornment, Typography } from "@mui/material"
import { useState } from "react"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ActionButton from "@/layouts/Button/ActionButton";
import Input from "@/layouts/Input/Input";
import LoginOptions from "../loginOptions/LoginOptions";
import AccountCheckMessage from "../accountCheckMessage/AccountCheckMessage";
const ForgetPasswordCard = () => {

    const handleBlur = () => {
        console.log('blur');
    }
    const handleChange = (event: any) => {
        console.log(event.target.value);
    }
    const [isDisabled, setDisabled] = useState(false)

    return (
        <Grid container spacing={5} >
            <Grid item xs={12} marginTop={2}>
                <Typography variant="h3" align="left" fontWeight={'bold'} color={"#333"}>Forget Password</Typography>
            </Grid>


            <Grid item xs={12}>
                <Input
                    type="email"
                    value=""
                    name="email"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    placeholder="Enter Your Email"
                    label="Email"
                    error=""
                />
            </Grid>




            <Grid item xs={12}>
                <ActionButton content="Login" variant="contained" disabled={isDisabled} />
            </Grid>
        </Grid>

    )
}

export default ForgetPasswordCard
