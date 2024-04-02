'use client'
import { palette } from "@/theme/palette";
import { AppBar, Box, colors } from "@mui/material";
import { styled } from '@mui/system';

export const NavbarButton = styled(Box)(({ theme }) => ({
    padding: '5px 20px',
    borderRadius: '50px',
    color: palette.whiteText,


    '&:hover': {
        backgroundColor: palette.whiteText,
        color: palette.primaryColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.3s ease',
        cursor: 'pointer',
    },
}));

export const FieldContainer = styled(AppBar)(({ theme }) => ({
    position: 'static',
    backgroundColor: palette.primaryColor,

}))


