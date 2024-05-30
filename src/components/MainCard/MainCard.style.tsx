'use client'
import { Grid, Paper, alpha } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';

export const CardContainer = styled(Paper)(({ theme }) => ({
    width :'250px',
    borderRadius :'10px',
    overflow: 'hidden', // Ensure content doesn't overflow the rounded corners
    boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease-in-out', // Add a smooth transform transition for hover effects
    '&:hover': {
        transform: 'scale(1.05)', // Slightly scale the card on hover
    },
   }))
export const CardImage = styled(Image)(({ theme }) => ({
    borderTopLeftRadius :'10px',
    borderTopRightRadius :'10px',
   }))
export const DescriptionGrid = styled(Grid)(({ theme }) => ({
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    right: '10px',
    animation: 'fadeIn 0.5s',
    '@keyframes fadeIn': {
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
    },
    marginTop : '10px',
   }))  
   export const InformationsGridContainer = styled(Grid)(({ theme }) => ({
    transition: 'height 0.3s ease-in-out',
    overflow: 'hidden',
   })) 
   export const CardPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: alpha(theme.palette.common.white, 0.4),
    backdropFilter: 'blur(4px)',
    borderRadius: '20px 20px 0px 0px',
   })) 
        

