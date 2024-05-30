import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Grid, IconButton} from '@mui/material';
import { ModalContainer, StyledSendeIcon, StyledTextField } from './Modal.style';
import CommentSection from '@/features/comment/CommentSection';

 interface TransitionModalProps {
    handleOpen: () => void;
    handleClose: () => void;
    open : boolean
    content : string,
    id? : number }
export default function TransitionsModal({handleOpen , handleClose , open , content , id} : TransitionModalProps) {
  
  const renderContent = () => {
    switch (content) {
      case 'comment':
        return <CommentSection bookId={id as number}/>;
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
           <Grid container>
            <Grid item xs={11}>
                <StyledTextField fullWidth placeholder='write your comment'></StyledTextField>
            </Grid>
            <Grid item xs={1}>
                <IconButton ><StyledSendeIcon fontSize='large'/></IconButton>
            </Grid>
           </Grid>
            
          </ModalContainer>
        </Fade>
      </Modal>
    </div>
  );
}