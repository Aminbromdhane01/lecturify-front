'use client'
import { palette } from "@/theme/palette";
import { AppBar, Box } from "@mui/material";
import { styled } from '@mui/system';

export const NavbarButton = styled(Box)(({ theme }) => ({
    padding: '5px 20px',
    borderRadius: '50px',
    color: palette.primaryColor,


    '&:hover': {
        backgroundColor: palette.primaryColor,
        color: palette.text1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.3s ease',
        cursor: 'pointer',
    },
}));

export const FieldContainer = styled(AppBar)(({ theme }) => ({
    position: 'static',
    backgroundColor: 'white',

}))


