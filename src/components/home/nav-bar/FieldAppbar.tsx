import { AppBar, Box, Typography } from '@mui/material'
import React from 'react'
import NavbarButton from '@/components/home/nav-bar/navar.button.style'


const FieldAppbar = () => {
    const CATEGORIES = ["Comedy ", "Science Fiction", "Fantasy", "Mystery"]
    return (
        <Box >
            <AppBar sx={{ position: 'static', }}>
                <Box display={'flex '} justifyContent={'space-around'} alignItems={'center'} height={'50px'}>
                    {CATEGORIES.map((category, index) => (
                        <NavbarButton key={index} borderRadius={'50px'}>
                            <Typography variant='body1'>{category}</Typography>
                        </NavbarButton>
                    ))}
                </Box>

            </AppBar>

        </Box>
    )
}

export default FieldAppbar