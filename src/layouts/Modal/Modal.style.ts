'use client'
import { Box, TextField } from '@mui/material';
import { styled } from '@mui/system';
import SendIcon from '@mui/icons-material/Send';
import { palette } from '@/theme/palette';


export const StyledTextField = styled(TextField)(({ theme }) => ({
    backgroundColor : 'white'
}))
export const StyledSendeIcon = styled(SendIcon)(({ theme }) => ({
    color : palette.primaryColor
}))
export const ModalContainer = styled(Box)(({ theme }) => ({
   position : 'absolute',
   top : '50%',
   left : '50%',
   transform: 'translate(-50%, -50%)',
   height : 'auto',
   width: '60%',
   boxShadow :'24',
   backgroundColor : palette.lightGrey,
   padding : '10px',
   display : 'flex',
   flexDirection : 'column',
   gap : '10px',
   [theme.breakpoints.down('sm')]: {
    width: '90%', 
},
}))