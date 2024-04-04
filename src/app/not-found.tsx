import { palette } from '@/theme/palette';
import { Box, Typography } from '@mui/material';
import React from 'react'

function NotFound() {
    return (
        <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            minHeight={'100vh'}
            bgcolor={palette.primaryColor}
        >
            <Typography variant="h1" color={palette.whiteText}>
                404 Not Found
            </Typography>
        </Box>
    );
}


export default NotFound
