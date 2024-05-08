'use client'
import { Checkbox, FormControlLabel, Grid, Stack, Typography } from "@mui/material"
import Link from "next/link"
import { useState } from "react"
import { useTranslations } from "next-intl";
import { StyledLink } from "./LoginOption.style";
import { constants } from "@/utils/constants/constants";


interface LoginOptionsProps {
    href: string
}


const LoginOptions = ({ href }: LoginOptionsProps) => {

    const [checked, setChecked] = useState(false)
    return (
        <Grid item xs={12} >
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                <StyledLink href={href} color="text.primary" >
                    {constants.AuthForm.FORGET_PASSWORD_EN}
                </StyledLink>
            </Stack>
        </Grid>
    )
}

export default LoginOptions