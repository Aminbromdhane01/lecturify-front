'use client'
import { palette } from '@/theme/palette';
import { Button, CardMedia } from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';

export const StyledButton = styled(Button)(({ theme }) => ({
   
    backgroundColor: palette.dodgerBlueText, 
    color: 'white', 
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer' , 
    margin : '10px',
    '&:hover': {
        backgroundColor: '#0E7C52', 
    },
}))
export const StyledAudioPlayer = styled(CardMedia)(({ theme }) => ({
    width: '80%',
    backgroundColor: '#f0f0f0',
    padding: '1px',
    margin: '10px',
    borderRadius: '4px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    '& .MuiCardMedia-root': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '@media (max-width: 600px)': {
      width: '100%',
      padding: '8px',
    },
  }));