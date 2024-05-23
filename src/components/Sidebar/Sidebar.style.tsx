'use client'
import { palette } from '@/theme/palette';
import {  Paper } from '@mui/material';
import { styled } from '@mui/system';

export const SidebarContainer = styled(Paper)(({ theme }) => ({
    width: '100%' , 
    height : '100%', 
    backgroundColor :palette.sidebarContainerColor,
    color : palette.adminIconsColor,
    display : 'flex' ,
    flexDirection : 'column' ,
    justifyContent :'space-between'
    
   }))
