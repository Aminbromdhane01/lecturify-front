import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { NonDecoratedLink } from './IconButton.style'

interface IconicButtonProps {
    icon: React.ReactNode
    text: string
    onClick?: () => void
}

const IconicButton = ({ icon, text , onClick }: IconicButtonProps) => {
    return (
        <>
            {icon}
            <NonDecoratedLink onClick={onClick} href={"#"}><Typography>{text}</Typography></NonDecoratedLink>
        </>
    )
}

export default IconicButton