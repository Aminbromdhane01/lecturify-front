'use client'
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import { palette } from '@/theme/palette';

const StyledSpan = styled('span')(({ theme }) => ({
    color : palette.primaryColor ,
    fontWeight : 'bold'

}));

export default StyledSpan;
