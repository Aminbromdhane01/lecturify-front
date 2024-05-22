'use client'
import { palette } from '@/theme/palette';
import { Paper } from '@mui/material';
import { styled } from '@mui/system';

export const LastInfoPaper = styled(Paper)(({ theme }) => ({
    width: '80%',
    backgroundColor : theme.palette.primary.contrastText
}))
