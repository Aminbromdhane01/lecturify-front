import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Grid, IconButton} from '@mui/material';
import { ModalContainer, StyledSendeIcon, StyledTextField } from './Modal.style';
import CommentSection from '@/features/comment/CommentSection';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCreateCommentMutation } from '@/RTK/api/CommentApi';
import { decodeAccesToken } from '@/helpers/decodedAceesToken';
import useAlert from '@/hooks/useAlert';
import ControlledAlert from '@/components/ControlledAlert/ControllerdAlert';

 interface TransitionModalProps {
    handleOpen: () => void;
    handleClose: () => void;
    open : boolean
    content : string,
    id? : number 
   bookId? : number}
    interface Comment {
       text : string}    
export default function TransitionsModal({handleOpen , handleClose , open , content , id , bookId} : TransitionModalProps) {
  const [createComment, { isLoading, isError , isSuccess , error }] = useCreateCommentMutation();

  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<Comment>(
    )
    const { open : opened, alertMessage, handleCloseAlert } = useAlert(isError, error);
        
  
    const onSubmit: SubmitHandler<Comment> = async (data) => {
      await createComment({text: data.text , userId : decodeAccesToken().sub , bookId :bookId as number})
      isSuccess && handleClose()
  }

  const renderContent = () => {
    switch (content) {
      case 'comment':
        return <CommentSection bookId={id as number} />;
      default:
        return null;
    }
  };
  return (
    <div>
     
      <Modal
        
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <ModalContainer>
           {renderContent()}
           <form onSubmit={handleSubmit(onSubmit)}>
           <Grid container>
            <Grid item xs={11}>
              
                <StyledTextField fullWidth placeholder='write your comment' {...register('text')}></StyledTextField>
            </Grid>
            <Grid item xs={1}>
                <IconButton disabled={isLoading} ><StyledSendeIcon fontSize='large'/></IconButton>
            </Grid>
            
           </Grid>
           </form>
           {opened && <ControlledAlert open={open} handleClose={handleCloseAlert} duration={3000} content={alertMessage} severity="error" />}
          </ModalContainer>
        </Fade>
      </Modal>
    </div>
  );
}