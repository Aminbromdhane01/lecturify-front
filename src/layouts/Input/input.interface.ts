import { OutlinedInputProps } from "@mui/material";
import React, { InputHTMLAttributes } from "react";

export interface InputProps extends OutlinedInputProps {
    label: string
    endAdornment?: string | React.ReactNode
    err?: string


} 