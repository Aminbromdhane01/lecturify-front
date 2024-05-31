'use client'
import { palette } from "@/theme/palette";
import { Box, Button, Paper } from "@mui/material";
import { styled } from '@mui/system';
export const EssayContainer = styled(Paper)(({ theme }) => ({
    width :'80%', minHeight :'450px' ,
    padding :'30px', 
    margin :'50px' ,
    display : 'flex',
    justifyContent :'space-between' ,
    flexDirection : 'column',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    boxShadow :' 5px 5px 5px 5px rgba(0, 0, 0, 0.2)'
     
     

}))
export const EssayButton = styled(Button)(({ theme }) => ({
    backgroundColor : palette.dodgerBlueText ,
    color : 'white' ,
    borderRadius :'20px' , 
    textTransform: 'none' ,
    p : '10px',
    transition: 'background-color 0.3s ease-in-out', 
    '&:hover': {
      backgroundColor: palette.skyBlueText, 
    }
}))
export const EssayPageContainer = styled(Box)(({ theme }) => ({
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    flexDirection : 'column',
    '&::before': {
        content: '""',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '80vh',
        background: 'linear-gradient(135deg, #1976D2 0%, #1278de 100%)',
        clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',
        zIndex: -1,
    },

}))
