import React from 'react'
import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import { palette } from '@/theme/palette'
import EssayAnimation from '@/components/essay/EssayAnimation';
import EssayEditor from '@/components/essay/EssayEditor';
import CustomModal from '@/components/CustomModal/CustomModal';
import { EditorContainer } from './EssayPage.style';
import MainCard from '@/components/MainCard/MainCard';

const EssayPage = () => {
  return (
    <Box bgcolor={palette.whiteText} height={'100vh'} color={'black'} display={'flex'} flexDirection={'column'}   alignItems={'center'} >
        <Stack direction={'row'} alignItems={'center'}>
           <EssayAnimation/>
           <Typography variant='h4' fontWeight={'bold'} m={2}>Write your essay</Typography>
        </Stack>
         <EditorContainer elevation={2} > 
           <EssayEditor/>
           <Box display={'flex'} alignItems={'flex-end'} justifyContent={'flex-end'} >
           <CustomModal/>
           </Box>
           
          </EditorContainer> 

    </Box>
  )
}

export default EssayPage