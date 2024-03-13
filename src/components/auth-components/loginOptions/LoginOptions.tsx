'use client'
import { Checkbox, FormControlLabel, Grid, Stack, Typography } from "@mui/material"
import Link from "next/link"
import { useState } from "react"
import { useTranslations } from "next-intl";


interface LoginOptionsProps {
    href: string
}


const LoginOptions = ({ href }: LoginOptionsProps) => {
    // const t = useTranslations();

    const [checked, setChecked] = useState(false)
    return (
        <Grid item xs={12} >
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checked}
                            onChange={(event) => setChecked(event.target.checked)}
                            name="checked"
                            color="primary"
                            size="small"
                        />
                    }
                    label={<Typography variant="body1">Keep me sign in</Typography>}
                />
                <Link href={href} color="text.primary" style={{ fontFamily: 'Montserrat', fontWeight: 'bold', color: '#007bff', textDecoration: 'none' }}>
                    Forgot Password?
                </Link>
            </Stack>
        </Grid>
    )
}

export default LoginOptions