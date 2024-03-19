import { Button } from '@mui/material'
import React from 'react'

export interface ActionButtonProps {
    variant: "outlined" | "contained"
    disabled: boolean
    content: string | React.ReactNode
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