'use client'
import { Box, IconButton, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteBookMutation, useSearchByTitleQuery } from '@/RTK/api/BookApi';


const BookDataTable = () => {
    const [search , setSearch] = useState<string>('')
const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);    
};
const [page, setPage] = useState(0);

const { data: books, isLoading, refetch , isSuccess , isError , error } = useSearchByTitleQuery({ page : page, itemPerPage :4, keyword :search as string},{refetchOnMountOrArgChange:true});
const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(--value);
 };
 const [deleteBook, { isLoading : loading , error :deleteErros , isError : isErr }] = useDeleteBookMutation();
 const handleDelete = async (id : number) =>
     {
       await deleteBook(id)
       refetch();
     }
  return (
    <Box m={2} p={3} sx={{ backgroundColor: '#f5f5f5', borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom>
        Book List
      </Typography>
      <TextField
        id="search"
        label="Search by title or category"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
        onChange={handleSearchChange}
      />
      <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: '#1976d2' }}>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>Id</TableCell>
              <TableCell sx={{ color: 'white' }} align="right">Title</TableCell>
              <TableCell sx={{ color: 'white' }} align="right">Category</TableCell>
              <TableCell sx={{ color: 'white' }} align="right">Delete</TableCell>     
            </TableRow>
          </TableHead>
          <TableBody>
            {books?.data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.genre}</TableCell>
                <TableCell align="right">
                 <IconButton   aria-label="books" sx={{p : 0}} onClick={()=>{handleDelete(row.id as unknown as number)}}>
                    <DeleteIcon sx={{ color: 'red' }} />
                           
                </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={books?.count && Math.ceil(books?.count/4)} variant="outlined" color="primary" sx={{ margin: 2 }} onChange={handleChange}/>
    </Box>
  )
}

export default BookDataTable