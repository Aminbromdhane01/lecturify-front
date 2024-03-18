import { FormHelperText, Grid, InputLabel, OutlinedInput, OutlinedInputProps, Stack } from '@mui/material'
import React from 'react'

export interface InputProps extends OutlinedInputProps {
    label: string
    endAdornment?: string | React.ReactNode
    err?: string,
    register?: any



}

const Input: React.FC<InputProps> = ({ label, err, endAdornment, register, ...inputProps }) => {
    return (
        <Grid item xs={12}>
            <Stack spacing={1}>
                <InputLabel >{label}</InputLabel>
                <OutlinedInput
                    fullWidth
                    endAdornment={endAdornment}
                    {...inputProps}
                    {...register}


                />

                {err && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                        {err}
                    </FormHelperText>
                )}

            </Stack>
        </Grid>
    )
}

export default Input