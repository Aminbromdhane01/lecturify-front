'use client'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface ComboBoxProps {
    register?: any
    options: { value: string; label: string }[];
}

export default function ComboBox({ register, options }: ComboBoxProps) {

    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            fullWidth
            renderInput={(params) => <TextField {...params} label="Author" {...register}
            />}

        />
    );
}
