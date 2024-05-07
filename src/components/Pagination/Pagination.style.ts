'use client'
import { Paper, PaperProps } from '@mui/material';
import { styled } from '@mui/system';
interface PaginationPaperProps extends PaperProps {
    width?: string; 
}


export const PaginationPaper = styled(Paper)<PaginationPaperProps>(({ theme , width }) => ({
    width : width ||'60%',
    height : '50px'
   }))
