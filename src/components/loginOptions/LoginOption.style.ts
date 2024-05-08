'use client'
import { palette } from '@/theme/palette';
import { Paper } from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';

export const StyledLink = styled(Link)(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: palette.dodgerBlueText,
    textDecoration: 'none'
   }))
