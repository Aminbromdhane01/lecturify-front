import React, { useState } from 'react'
import Modal from '@mui/material/Modal';
import Input from '@/layouts/Input/Input';
import { ModalContainer, StyledButton } from './CustomModal.style';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from '@/RTK/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { formDataSchema } from './custom-modal.validation';
import { useCreateEssayMutation } from '@/RTK/api/EssayApi';

interface FormData {
    title: string;
  }
  
const CustomModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>(
        { resolver: zodResolver(formDataSchema) }
    );
    const content = useSelector((state: RootState) => state.essay.content);
    const [createEssay, { isLoading, isError, isSuccess, error }] = useCreateEssayMutation();


    const onSubmit:SubmitHandler<FormData>= async (data) => {
        await createEssay({title :data.title , content :content as string , userId : 30})        
        handleClose();
      };
  
  return (
    <>
    <StyledButton width='15%' onClick={handleOpen} marginTop='40px' >Submit</StyledButton>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContainer  display={'flex'}  flexDirection={'column'}   >
        <form onSubmit={handleSubmit(onSubmit)}>
        <Input label='Your essay Title' register={register('title')} err={errors.title ? errors.title.message : ''}></Input>
        <StyledButton width='30%' type='submit' >Send Essay</StyledButton>
        </form>
      </ModalContainer>
    </Modal>
    </>
  )}

  export default CustomModal