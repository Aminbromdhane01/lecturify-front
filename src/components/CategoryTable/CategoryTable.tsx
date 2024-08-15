import { CreateCategoryDto, useCreateCategoryMutation, useDeleteCategoryMutation, useLazyGetCategoriesQuery } from '@/RTK/api/CategoryApi';
import { Box, Button, IconButton, Input, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import DeleteIcon from '@mui/icons-material/Delete';

const CategoryTable = () => {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<CreateCategoryDto>(
     ) 
     const onSubmit: SubmitHandler<CreateCategoryDto> = async (data) => {
        await categorieMutation({type : data.type})
        fetch()

        }
        const [fetch,{ data : categories, error, isLoading }] = useLazyGetCategoriesQuery();
        useEffect(()=>{
            fetch()
        },[])  
        const [categorieMutation, { data: response, isLoading : load, isError, isSuccess, error : err }] = useCreateCategoryMutation(); 
        const [deleteCategory, { isLoading : loading , error :deleteErros , isError : isErr }] = useDeleteCategoryMutation();
        const handleDelete = async (id : number) =>
            {
              await deleteCategory(id)
              fetch();
              
            }
  return (
    <Box m={2} p={3} sx={{ backgroundColor: '#f5f5f5', borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom>
        Category List
      </Typography>
      <Stack direction={'row'} gap={2} mb={2}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="New Category" sx={{ flexGrow: 1 , margin : '10px' }} {...register('type')}/>
        <Button variant="contained" color="primary" type='submit'>Create</Button>
        </form>
      </Stack>
      <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: '#1976d2' }}>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>Id</TableCell>
              <TableCell sx={{ color: 'white' }} align="right">Category</TableCell>
              <TableCell sx={{ color: 'white' }} align="right">Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories?.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.type}</TableCell>
                <TableCell align="right">
                 <IconButton onClick={()=>{handleDelete(row.id)}}  aria-label="notifications" sx={{p : 0}} >
                    <DeleteIcon sx={{ color: 'red' }} />
                           
                </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default CategoryTable
