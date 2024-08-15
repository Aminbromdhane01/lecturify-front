'use client'
import Input from '@/layouts/Input/Input'
import Select from '@/layouts/Select/Select'
import { Box, Button, Grid, Modal, Typography, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { SubmitHandler, useForm } from "react-hook-form";
import MultiStepController from '@/components/MultiStepController/MultiStepController';
import { useDispatch } from "react-redux";
import { setBook } from '@/RTK/slices/BookSlice';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookValidationSchema } from '@/features/book/AddBookFrom/book.form.validation';
import { BookFormOneType } from './book.form.type'
import { CreateAuthorDto, useCreateAuthorMutation, useLazyGetAuthorsQuery } from '@/RTK/api/AuthorApi'
import { useLazyGetCategoriesQuery } from '@/RTK/api/CategoryApi'
import { ModalContainer } from '@/layouts/Modal/Modal.style'


const Categories = ['Horror', 'Comedy', 'Fiction']
const authorss = [
    { value: '1', label: "John Doe" },
    { value: '2', label: "Jane Smith" },
    { value: '3', label: "Alice Johnson" },
];
interface BookFormOneProps {
    nextStep: () => void
}
const BookFormOne = ({ nextStep }: BookFormOneProps) => {
    const [fetch,{ data : authors, error, isLoading }] = useLazyGetAuthorsQuery();
    const [fetchCategories,{ data : categories, error :err, isLoading : load}] = useLazyGetCategoriesQuery();
    const [authorMutation, { data: response, isLoading : loading, isError, isSuccess, error : createErr }] = useCreateAuthorMutation(); 
    useEffect(()=>{
        fetch()
    },[])
    useEffect(()=>{
        fetchCategories()
    },[])
    console.log(categories);
    
    const mappedAuthors = authors?.map(author => ({
        value: `${author.id}`,  
        label: author.name,
      }));  
      const fetchedCategoryTypes = categories?.map(category => category.type);
      console.log(fetchedCategoryTypes);
      
    
    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<BookFormOneType>({
        resolver: zodResolver(bookValidationSchema)
    })
    const { register : reg, handleSubmit : handle, watch : watchAuthor, formState: { errors : Autherrors, isSubmitting : sub } } = useForm<CreateAuthorDto>(
        )
    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<BookFormOneType> = (data) => {
        dispatch(setBook({ title: data.title, genre: data.genre, authorId: +data.authorId, pages: data.pages }))
        console.log(data);
        nextStep()
    }
    const Submit: SubmitHandler<CreateAuthorDto> = async (data) => {
        await authorMutation({name : data.name , biography :data.biography})
        fetch();
        handleClose();
        
    }
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <Input label='Title'
                        placeholder='Enter The Book Title'
                        register={register('title')}
                        err={errors.title ? errors.title.message : ''} />
                </Grid>
                <Grid item xs={12}>
                    <Select label='Select Book Genre' items={fetchedCategoryTypes} register={register('genre')}
                        err={errors.genre ? errors.genre.message : ''}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Input label='Pages'
                        type='number'
                        placeholder='Enter The Number of Pages'
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        register={register('pages')}
                        err={errors.pages ? errors.pages.message : ''} />
                </Grid>
                <Grid item xs={12} container>
                    <Grid item xs={11}><Select label='Select Book Author' complexItems={mappedAuthors} register={register('authorId')}
                        err={errors.authorId ? errors.authorId.message : ''}
                    /></Grid>
                    <Grid item xs={1}><Button onClick={handleOpen} ><AddIcon fontSize='large' /></Button></Grid>
                </Grid>
                <Grid item xs={12}>
                    <MultiStepController
                        backButtonIsDisabled={true}
                        forwadButtonIsDisabled={isSubmitting} />
                </Grid>
             
                <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box
    sx={{
      width: '50%',
      borderRadius: '20px',
      backgroundColor: 'white',
      boxShadow: 24,
      p: 4,
      textAlign: 'center',
      mx: 'auto',
      mt: '20vh', 
    }}
  > <form onSubmit={handle(Submit)} >
    <Input register={reg('name')} fullWidth label="Author Name" placeholder="Author Name" sx={{ mb: 2 }} />
    <Input register={reg('biography')} fullWidth multiline label="Biography" placeholder="Biography" sx={{ mb: 2 }} />
    <Button variant="contained" color="primary" sx={{m :1}} type='submit'>
      Add Author
    </Button>
    </form>
  </Box>
</Modal>;
            </Grid>
        </form>
    )
}

export default BookFormOne
