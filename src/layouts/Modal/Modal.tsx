import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import SendIcon from '@mui/icons-material/Send';
import { Grid, IconButton, Paper, TextField, TextareaAutosize } from '@mui/material';
import { palette } from '@/theme/palette';
import { ModalContainer, StyledSendeIcon, StyledTextField } from './Modal.style';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  height : 'auto',
  bgcolor: palette.lightGrey,
  boxShadow: 24,
  p: 1,
};
 interface TransitionModalProps {
    handleOpen: () => void;
    handleClose: () => void;
    open : boolean
    content : React.ReactElement }
export default function TransitionsModal({handleOpen , handleClose , open , content} : TransitionModalProps) {
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
           {content}
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