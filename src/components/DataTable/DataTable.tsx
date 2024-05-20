'use client'
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Paper, Stack, Typography } from '@mui/material';
import { palette } from '@/theme/palette';
import Image from 'next/image';
import { DataTablePaper } from './DataTable.style';


interface Props {
  rows : any[];
  coloumns :GridColDef[]
  loading : boolean
  image : string
  title : string
  width? : string
  marginTop? : string
}


export default function DataTable({ rows , coloumns , loading , image , title , width , marginTop} : Props) {
  return (
    
    <DataTablePaper elevation={2} width={width} marginTop={marginTop}>
        <Stack direction={'row'} margin={1} gap={1}>
            <Image src={image} height={40} width={40} alt='Data Grid Icon'/>
            <Typography variant="h6" component="div" gutterBottom  color={palette.primaryColor} fontWeight={'bold'}>
             {title}    
            </Typography>
        </Stack>
     

    <DataGrid
        rows={rows}
        columns={coloumns}
        hideFooterPagination
        density='compact'
        autoHeight
        loading={loading}
        
         />
    </DataTablePaper>
 
  );
}