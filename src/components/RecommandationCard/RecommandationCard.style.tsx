'use client'
import { palette } from '@/theme/palette';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';

export const StyledImage = styled(Image)(({ theme }) => ({
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px'
}))
export const SummaryTypography = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
     m : 1
}))
export const ButtonContainer = styled(Box)(({ theme }) => ({
    width : '50%',
    borderRadius :'10px',
    padding : '10px',
    margin : '10px',
    backgroundColor : palette.skyBlueText,
    '&:hover': {
        backgroundColor: palette.skyBlueText, // Maintain base color on hover
        opacity: 0.8, // Add subtle translucency on hover
        cursor: 'pointer', // Indicate interactivity with pointer cursor
      },
}))
