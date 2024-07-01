'use client'
import { Box, Rating, Stack, Typography, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/RTK/store';
import { constants } from '@/utils/constants/constants';
import { useLazyGetUserQuery } from '@/RTK/api/ProfileApi';
import { decodeAccesToken } from '@/helpers/decodedAceesToken';
import { setProfile } from '@/RTK/slices/ProfileSlice';

const ProfileInfo = () => {
    const theme = useTheme()
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user)
    const [fetch,{ data : userInfos, error, isLoading }] = useLazyGetUserQuery();
    useEffect(()=>{
        fetch(decodeAccesToken().sub)
    },[])
    useEffect(() => {
        if (userInfos) {
            dispatch(setProfile({
                picture: userInfos.picture as unknown as string || null,
                adress: userInfos.adress || null,
                gender: userInfos.gender !== undefined ? userInfos.gender : null,
                phonenumber: userInfos.phonenumber || null,
            }));
        }
    }, [userInfos, dispatch]);
    
  return (
    <Box display={'flex'} flexDirection={'column'}>  
        <Stack>
        <Typography variant='h5' color={theme.palette.text.primary} fontWeight={'bold'} >{user.fullName}</Typography>
            <Stack direction={'row'} >
                <LocationOnOutlinedIcon/>
                <Typography variant='body1' color={theme.palette.text.secondary} >{userInfos?.adress}</Typography>
            </Stack>
        </Stack>
            <Stack marginTop={4} >
            <Stack direction={'column'}>
                <Box>Phone Number</Box>
                <Typography variant='body2' fontSize={'20px'} color={theme.palette.primary.main}>{userInfos?.phonenumber}</Typography>
            </Stack>
            <Stack direction={'row'}>
            </Stack>
           
           
            </Stack>
    </Box>
  )
}

export default ProfileInfo
