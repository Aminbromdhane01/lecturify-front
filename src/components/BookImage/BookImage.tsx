import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const BookImage = () => {
    return (
        <Box margin={1} minHeight={'300px'} position="relative">
            <Image
                src={'/bookCover.png'}
                alt='ImAGE'
                fill={true}

            />
        </Box>
    )
}

export default BookImage