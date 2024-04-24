import { Box, FormHelperText, MenuItem, TextField } from '@mui/material'
import React from 'react'

const Select = ({ items, label, register, complexItems, err }: SelectProps) => {
    if (items) {
        return (
            <Box>
                <TextField

                    select
                    label="Select"
                    defaultValue={items[0]}
                    helperText={label}
                    fullWidth
                    {...register}
                >
                    {items.map((option) => (
                        <MenuItem key={option} value={option} >
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                {err && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                        {err}
                    </FormHelperText>
                )}
            </Box>


        )
    }
    else if (complexItems) {
        return (
            <Box>
                <TextField

                    select
                    label="Select"
                    defaultValue={complexItems[0].value}

                    helperText={label}
                    fullWidth
                    {...register}
                >
                    {complexItems.map((option) => (
                        <MenuItem key={option.value} value={option.value} >
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                {err && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                        {err}
                    </FormHelperText>
                )}
            </Box>)


    }
}

export default Select