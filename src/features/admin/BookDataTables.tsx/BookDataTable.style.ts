import { palette } from '@/theme/palette';
import { Box } from '@mui/material';
import { styled } from '@mui/system';


export const AdminBackground = styled(Box)(({ theme }) => ({
    position: 'relative',
    zIndex: 1,
    padding: 0,

    '&::before': {
        content: '""',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        background: palette.greyText,
        zIndex: -1,
    },
}))