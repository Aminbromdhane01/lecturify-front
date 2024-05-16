'use client'
import { Paper, Typography } from "@mui/material";
import { styled } from '@mui/system';
interface NumberProps {
    fontSize?: string;
  }
export const AdminPaper = styled(Paper)(({ theme ,color }) => ({
  borderRadius : '10px',
  minHeight : '150px',
  margin : '10px',
  backgroundColor :color , 
  color :'white'
}))
export const AdminTypography = styled(Typography)(({ theme}) => ({
   fontWeight : 'bold',
   padding : '10px',
  }))