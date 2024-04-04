import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { NonDecoratedLink } from './IconButton.style'

interface IconicButtonProps {
    icon: React.ReactNode
    text: string
}

const IconicButton = ({ icon, text }: IconicButtonProps) => {
    return (
        <>
            {icon}
            <NonDecoratedLink href={"#"}><Typography>{text}</Typography></NonDecoratedLink>
        </>
    )
}

export default IconicButton