import { Box, Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
interface BookImageProps {
    url? : string
}

const BookImage = ({url} : BookImageProps) => {



    return (
        <Box margin={1} minHeight={'300px'} position="relative">
            <Image
                src={url as string}
                alt='ImAGE'
                fill={true}

            />

        </Box>
    )
}

export default BookImage