'use client'
import { Box } from "@mui/material";
import { styled } from "@mui/system";


export const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
}));