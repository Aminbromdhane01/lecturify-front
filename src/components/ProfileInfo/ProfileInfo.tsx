'use client'
import { Box, Rating, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useSelector } from 'react-redux';
import { RootState } from '@/RTK/store';
import { constants } from '@/utils/constants/constants';

const ProfileInfo = () => {
    const theme = useTheme()
    const user = useSelector((state: RootState) => state.user)

  return (
    <Box display={'flex'} flexDirection={'column'}>  
        <Stack>
        <Typography variant='h5' color={theme.palette.text.primary} fontWeight={'bold'} >{user.fullName}</Typography>
            <Stack direction={'row'} >
                <LocationOnOutlinedIcon/>
                <Typography variant='body1' color={theme.palette.text.secondary} >{constants.Profile.MOCK_ADRESS}</Typography>
            </Stack>
        </Stack>
            <Stack marginTop={4} >
            <Stack direction={'row'}>
                <Typography variant='body2' fontSize={'20px'} color={theme.palette.primary.main}>{constants.Profile.MOCK_PUBLISHED_BOOKS}</Typography>
            </Stack>
            <Stack direction={'row'}>
                <Typography variant='body1'  fontSize={'20px'} color={theme.palette.primary.main}>{constants.Profile.MOCK_PUBLISHED_WORKS}</Typography>
            </Stack>
            <Typography marginTop={11} variant='body1'  fontSize={'20px'} color={theme.palette.primary.main}>{constants.Profile.AVERAGE_BOOK_RATING}</Typography>
            <Rating readOnly value={3.2}/>
           
            </Stack>
    </Box>
  )
}

export default ProfileInfo
