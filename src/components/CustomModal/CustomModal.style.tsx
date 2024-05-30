'use client'
import { palette } from "@/theme/palette";
import { Box, Button } from "@mui/material";
import { styled } from '@mui/system';
interface StyledButtonProps {
    width?: string;
    marginTop?: string;
  }
export const StyledButton = styled(Button)<StyledButtonProps>(({ theme , width , marginTop  }) => ({
    borderRadius : '20px' ,
    backgroundColor : palette.dodgerBlueText ,
    color : 'white' ,
    margin : '10px' ,
    width: width || '50%',
    '&:hover': {
    backgroundColor: palette.skyBlueText
   
  },
  [theme.breakpoints.up('lg')]: {
    marginTop : marginTop||'20px' ,
  },

}))
export const ModalContainer = styled(Box)(({ theme }) => ({
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    border: '1px  #000',
    boxShadow : '24px',
    borderRadius :'10px',
    padding : '20px',
    minWidth : '400px'
}))