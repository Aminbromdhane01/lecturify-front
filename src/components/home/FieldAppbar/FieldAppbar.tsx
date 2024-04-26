import { Box, Typography } from '@mui/material'
import React from 'react'
import { FieldContainer, NavbarButton } from './FieldAppbar.style'



const FieldAppbar = () => {
    const CATEGORIES = ["Comedy ", "Science Fiction", "Fantasy", "Mystery"]
    return (
        <Box >
            <FieldContainer sx={{ position: 'static', }}>
                <Box display={'flex '} justifyContent={'space-around'} alignItems={'center'} height={'50px'}>
                    {CATEGORIES.map((category, index) => (
                        <NavbarButton key={index} borderRadius={'50px'}>
                            <Typography variant='body1' fontWeight={'bold'}>{category}</Typography>
                        </NavbarButton>
                    ))}
                </Box>

            </FieldContainer>

        </Box>
    )
}

export default FieldAppbar