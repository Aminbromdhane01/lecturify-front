import { Button } from '@mui/material'
import React from 'react'

export interface ActionButtonProps {
    variant: "outlined" | "contained"
    disabled: boolean
    content: string
    handleClick?: () => void;
}

const ActionButton = ({ variant, disabled, content, handleClick }: ActionButtonProps) => {
    return (
        <Button type='submit' fullWidth variant={variant} disabled={disabled} onClick={handleClick}>
            {content}
        </Button>
    )
}

export default ActionButton