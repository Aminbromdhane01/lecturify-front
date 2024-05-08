"use client"
import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import { Paper } from '@mui/material';
import { PaginationPaper } from './Pagination.style';
interface TablePaginationProps {
    page: number;
    rowsPerPage: number;
    onPageChange: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
    onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    count : number;
    width? : string 
  }
export default function Pagination({ page, rowsPerPage, onPageChange, onRowsPerPageChange , count , width}: TablePaginationProps) {
 
  return (
    <PaginationPaper elevation={2} width={width}>

    <TablePagination
      component="div"
      count={count}
      page={page}
      onPageChange={onPageChange}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={onRowsPerPageChange}
    />
    </PaginationPaper>
  );
}