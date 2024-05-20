'use client'
import DataTable from '@/components/DataTable/DataTable';
import Pagination from '@/components/Pagination/Pagination';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Stack } from '@mui/material';

import { GridColDef } from '@mui/x-data-grid'
import React, { useState } from 'react'
interface DataGridProps {
    rows: any[];
    columns: GridColDef[];
    page: number;
    rowsPerPage: number;
    onPageChange: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
    onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleDeleteClick?: (id: number) => void;
    loading: boolean;
    image : string;
    title : string
    width? : string
    marginTop? : string
  }

const DataGrid =({ rows, columns, page, rowsPerPage, onPageChange, onRowsPerPageChange, handleDeleteClick, loading , image , title , width , marginTop} : DataGridProps) => {


  return (
  <>
  <Stack direction={'column'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
  <DataTable  rows={rows} coloumns={columns} loading={loading} image={image} title={title} width={width} marginTop={marginTop}/>
  <Pagination count={20} page={page} rowsPerPage={rowsPerPage} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange} width={width}/>
  </Stack>
  </>
  )
}

export default DataGrid