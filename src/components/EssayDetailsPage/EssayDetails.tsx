'use client'
import { palette } from '@/theme/palette'
import { Box, Button, CircularProgress, Modal, Paper, Rating, TextField, TextareaAutosize, Typography } from '@mui/material'
import React from 'react'
import { EssayButton, EssayContainer, EssayPageContainer } from './EssayDetails.style'
import { ModalContainer } from '../CustomModal/CustomModal.style'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CreateReviewDto } from '@/RTK/api/types/review.api.types'
import { useCreateReviewMutation } from '@/RTK/api/ReviewApi'
import EssayOverview from '../EssayOverview/EssayOverview'
import useAlert from '@/hooks/useAlert'
import ControlledAlert from '../ControlledAlert/ControllerdAlert'

interface EssayDeatilsProps{
  essayId: number
}

const EssayDetailsPage = ({essayId} : EssayDeatilsProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState<number | null>(0);
  const [createReview, { isLoading , isError , error }] = useCreateReviewMutation(); 


  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<CreateReviewDto>(
    )
    const onSubmit: SubmitHandler<CreateReviewDto> = async (data) => {
      await createReview({comments : data.comments , rating : value as number , essayId : essayId})
      handleClose();
      
  }
  const { open : openAlert, alertMessage, handleCloseAlert } = useAlert(isError, error);

  
  return (
    <EssayPageContainer>
      <EssayOverview  onClick={handleOpen} essayId={essayId} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainer >
          <form onSubmit={handleSubmit(onSubmit)}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Your feedback
          </Typography>
          <TextField minRows={10} multiline fullWidth {...register('comments')} />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Score
          </Typography>
          <Rating value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}/>
          <Box display={'flex'} alignItems={'flex-end'} justifyContent={'flex-end'}>
        <EssayButton type='submit' disabled={isLoading} >
           {isLoading ? <CircularProgress/> : 'Send Your FeedBack'}</EssayButton>
          </Box>
          </form>
          {open && <ControlledAlert open={openAlert} handleClose={handleCloseAlert} duration={3000} content={alertMessage} severity="error" />}
        </ModalContainer>
      </Modal>
     
    </EssayPageContainer>
  )
}

export default EssayDetailsPage
