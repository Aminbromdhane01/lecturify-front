'use client'
import { Grid, InputLabel, TextField, Typography } from '@mui/material'
import React from 'react'
import Input from '@/layouts/Input/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import ActionButton from '@/layouts/Button/ActionButton';
import MultiStepController from '@/components/MultiStepController/MultiStepController';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/RTK/store';
import { setBook } from '@/RTK/slices/BookSlice';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookValidationFormTwoSchema } from '@/features/book/AddBookFrom/book.form.validation';
import { BookFormTwoType } from './book.form.type';
interface FormBookTwoProps {
    previousStep?: () => void
}

const BookFormTwo = ({ previousStep }: FormBookTwoProps) => {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<BookFormTwoType>({
        resolver: zodResolver(bookValidationFormTwoSchema)
    })
    const dispatch = useDispatch();
    const onSubmit: SubmitHandler<BookFormTwoType> = (data) => {
        dispatch(setBook({ description: data.description, cover: data.cover, content: data.content }))

        console.log(data);

    }
    const bookSlice = useSelector((state: RootState) => state.book);
    console.log(bookSlice);



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography align='left' variant='h5' fontWeight={'bold'}>Add Post</Typography>
                </Grid>
                <Grid item xs={12}>
                    <InputLabel>Description</InputLabel>
                    <TextField fullWidth multiline {...register('description')} />
                </Grid>
                <Grid item xs={12}>
                    <Input label='Cover Image' type='file' register={register('cover')}
                        err={errors.cover ? errors.cover.message : ''} />
                </Grid>
                <Grid item xs={12}>
                    <Input label='Book File' type='file' register={register('content')}
                        err={errors.content ? errors.content.message : ''} />

                </Grid>
                <Grid item xs={12}>
                    <MultiStepController forwadButtonIsDisabled={true} backButtonIsDisabled={false} backButtonOnClick={previousStep} />
                </Grid>
                <Grid item xs={12}>
                    <ActionButton content={'Add Book'} variant="contained" disabled={isSubmitting} />
                </Grid>

            </Grid>
        </form>
    )
}

export default BookFormTwo
