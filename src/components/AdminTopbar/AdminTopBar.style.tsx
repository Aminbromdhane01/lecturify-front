'use client'
import { Box, Paper, Typography } from "@mui/material";
import { styled } from '@mui/system';

export const AdminTopBarPaper = styled(Paper)(({ theme ,color }) => ({
  minHeight : '50px',
  width : '100%'
}))
export const AdminTopBarContainer = styled(Box)(({ theme}) => ({
   display : 'flex',
   justifyContent : 'space-between',
   flexDirection :'row-reverse',
   padding : '10px'
  }))