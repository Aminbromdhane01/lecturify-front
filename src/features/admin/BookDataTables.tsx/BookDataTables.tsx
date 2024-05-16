import React, { useState } from 'react'
import DataGrid from "@/layouts/DataGrid/DataGrid";
import { GridColDef } from '@mui/x-data-grid';

const BookDataTables = () => {
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  
    const handleDeleteClick = (id: number) => {
      console.log(`Deleted row with ID: ${id}`);
    };
  
    const BOOK_FIELDS: string[] = ['Title','Rating', 'PublishDate', 'Pages','Author', 'Publisher', ];  
    const booksData = [
        {
            id: 1,
            Title: 'The Great Gatsby',
            Rating: 4.2,
            PublishDate: '1925-04-10',
            Pages: 218,
            Author: 'F. Scott Fitzgerald',
            Publisher: 'Charles Scribner\'s Sons'
        },
        {
            id: 2,
            Title: 'To Kill a Mockingbird',
            Rating: 4.5,
            PublishDate: '1960-07-11',
            Pages: 281,
            Author: 'Harper Lee',
            Publisher: 'J.B. Lippincott & Co.'
        },
        {
            id: 3,
            Title: '1984',
            Rating: 4.6,
            PublishDate: '1949-06-08',
            Pages: 328,
            Author: 'George Orwell',
            Publisher: 'Secker & Warburg'
        },
    ];
  
    const columns: GridColDef[] = BOOK_FIELDS.map(field => ({
      field,
      headerName: field.charAt(0).toUpperCase() + field.slice(1),
      width: 150,
    }));
  
    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    return (
      <DataGrid
        image={'/book-admin.svg'}
        title="Books"
        rows={booksData}
        columns={columns}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        handleDeleteClick={handleDeleteClick}
        loading={false}
        width="80%"
        marginTop="50px"
      />
    );
  };
  

export default BookDataTables