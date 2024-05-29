'use client'
import { styled } from '@mui/system';
import { palette } from '@/theme/palette';
import { Box } from '@mui/material';

export const StyledSpan = styled('span')(({ theme }) => ({
    color : palette.primaryColor ,
    fontWeight : 'bold'

}));
export const NoDataContainer = styled(Box)(({ theme }) => ({
    width :'50%',
    paddingTop : '10px',
    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
    [theme.breakpoints.between('sm', 'md')]: {
        width: '80%',
    },
}));



