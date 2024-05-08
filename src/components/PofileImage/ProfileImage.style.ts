'use client'
import { palette } from '@/theme/palette';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const ProfileImageContainer = styled(Box)(({ theme }) => ({
    minHeight : '300px',
    margin : '10px',
    position : 'relative',
    backgroundColor : palette.lightGrey,
    borderRadius : '10px'
    
   }))
