'use client'
import { palette } from '@/theme/palette'
import { Box, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useSelector } from 'react-redux';
import { RootState } from '@/RTK/store';

const ProfileInfo = () => {
   
    const user = useSelector((state: RootState) => state.user)

  return (
    <Box display={'flex'} flexDirection={'column'}>  
        <Stack>
        <Typography variant='h5' color={palette.blackText} fontWeight={'bold'} >{user.fullName}</Typography>
            <Stack direction={'row'} >
                <LocationOnOutlinedIcon/>
                <Typography variant='body1' color={palette.greyText} >Adress</Typography>
            </Stack>
        </Stack>
            <Stack marginTop={4} >
            <Stack direction={'row'}>
                <Typography variant='body2' fontSize={'20px'} color={palette.primaryColor}>Published Books Total : 20 </Typography>
            </Stack>
            <Stack direction={'row'}>
                <Typography variant='body1'  fontSize={'20px'} color={palette.primaryColor}>Published Works Total : 20 </Typography>
            </Stack>
            <Typography marginTop={11} variant='body1'  fontSize={'20px'} color={palette.primaryColor}>Average Book Rating</Typography>
            <Rating readOnly value={3.2}/>
           
            </Stack>
    </Box>
  )
}

export default ProfileInfo
