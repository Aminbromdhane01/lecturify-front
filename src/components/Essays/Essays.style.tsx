'use client'
import { styled } from "@mui/system";
import { Box } from "@mui/material";
export const EssaysListContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
}));