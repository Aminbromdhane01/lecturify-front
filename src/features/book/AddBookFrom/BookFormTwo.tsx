'use client'
import { useCreateBookMutation } from '@/RTK/api/BookApi';
import { setBook } from '@/RTK/slices/BookSlice';
import { RootState } from '@/RTK/store';
import MultiStepController from '@/components/MultiStepController/MultiStepController';
import ControlledAlert from '@/components/alert/ControllerdAlert';
import { bookValidationFormTwoSchema } from '@/features/book/AddBookFrom/book.form.validation';
import { decodeAccesToken } from '@/helpers/decodedAceesToken';
import useAlert from '@/hooks/useAlert';
import ActionButton from '@/layouts/Button/ActionButton';
import Input from '@/layouts/Input/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { CircularProgress, Grid, InputLabel, TextField, Typography } from '@mui/material';
import { redirect } from 'next/navigation';
import { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { BookFormTwoType } from './book.form.type';

interface FormBookTwoProps {
    previousStep?: () => void
}

const BookFormTwo = ({ previousStep }: FormBookTwoProps) => {
    const formRef = useRef<HTMLFormElement>(null);
  

    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<BookFormTwoType>({
        resolver: zodResolver(bookValidationFormTwoSchema)
    })
    const [createBook, { isLoading, isError , isSuccess , error }] = useCreateBookMutation();
    const dispatch = useDispatch();
    const bookSlice = useSelector((state: RootState) => state.book);
    const onSubmit: SubmitHandler<BookFormTwoType> = async (data) => {
        dispatch(setBook({ description: data.description, files : data.content[0], content: data.content[0] }))
        
       
       await createBook({description : data.description ,pages :bookSlice.pages , files : data.content[0]  , userId : decodeAccesToken().sub , genre :bookSlice.genre , title : bookSlice.title , filestwo : data.cover[0] })//
       

    }
   
    console.log(decodeAccesToken().sub);
    
    
    isError && console.log(error);
    if (isSuccess){
        redirect('/home')
    }
    const { open, alertMessage, handleCloseAlert } = useAlert(isError, error);

    


   



    return (
        <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
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
                    <ActionButton content={isLoading ? <CircularProgress /> : 'Add Book'} variant="contained" disabled={isSubmitting} />
                </Grid>
                {open && <ControlledAlert open={open} handleClose={handleCloseAlert} duration={3000} content={alertMessage} severity="error" />}

            </Grid>
        </form>
    )
}

export default BookFormTwo
