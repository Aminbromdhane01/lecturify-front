'use client'
import { Grid, IconButton, InputAdornment, Typography } from "@mui/material"
import ActionButton from "@/layouts/Button/ActionButton";
import Input from "@/layouts/Input/Input";
const ForgetPasswordCard = () => {
    return (
        <Grid container spacing={5} >
            <Grid item xs={12} marginTop={2}>
                <Typography variant="h3" align="left" fontWeight={'bold'} color={"#333"}>Forget Password</Typography>
            </Grid>


            <Grid item xs={12}>
                <Input
                    type="email"
                    placeholder="Enter Your Email"
                    label="Email"
                />
            </Grid>
            <Grid item xs={12}>
                <ActionButton content="Login" variant="contained" disabled={false} />
            </Grid>
        </Grid>

    )
}

export default ForgetPasswordCard
