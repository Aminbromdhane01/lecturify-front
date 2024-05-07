'use client'
import { Paper, PaperProps } from '@mui/material';
import { styled } from '@mui/system';
interface DataTablePaperProps extends PaperProps {
    width?: string; 
    marginTop?: string;
}

export const DataTablePaper = styled(Paper)<DataTablePaperProps>(({ theme , width , marginTop}) => ({
    width: width ||'60%',
    marginTop : marginTop
}))
