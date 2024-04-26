'use client'
import Input from '@/layouts/Input/Input'
import Select from '@/layouts/Select/Select'
import { Button, Grid, } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { SubmitHandler, useForm } from "react-hook-form";
import MultiStepController from '@/components/MultiStepController/MultiStepController';
import { useDispatch } from "react-redux";
import { setBook } from '@/RTK/slices/BookSlice';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookValidationSchema } from '@/features/book/AddBookFrom/book.form.validation';
import { BookFormOneType } from './book.form.type'


const Categories = ['Horror', 'Comedy', 'Fiction']
const authors = [
    { value: '1', label: "John Doe" },
    { value: '2', label: "Jane Smith" },
    { value: '3', label: "Alice Johnson" },
];
interface BookFormOneProps {
    nextStep: () => void
}
const BookFormOne = ({ nextStep }: BookFormOneProps) => {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<BookFormOneType>({
        resolver: zodResolver(bookValidationSchema)
    })
    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<BookFormOneType> = (data) => {
        dispatch(setBook({ title: data.title, genre: data.genre, authorId: +data.authorId, pages: data.pages }))
        console.log(data);
        nextStep()
    }


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
                    <Select label='Select Book Genre' items={Categories} register={register('genre')}
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
                    <Grid item xs={11}><Select label='Select Book Genre' complexItems={authors} register={register('authorId')}
                        err={errors.authorId ? errors.authorId.message : ''}
                    /></Grid>
                    <Grid item xs={1}><Button ><AddIcon fontSize='large' /></Button></Grid>
                </Grid>
                <Grid item xs={12}>
                    <MultiStepController
                        backButtonIsDisabled={true}
                        forwadButtonIsDisabled={isSubmitting} />
                </Grid>
            </Grid>
        </form>
    )
}

export default BookFormOne
