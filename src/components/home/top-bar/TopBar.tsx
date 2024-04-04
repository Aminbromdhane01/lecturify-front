'use client'
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Stack, Typography, styled } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import StyledAppBarTitle from '@/components/home/top-bar/topbar.style';
import Search from '@/components/home/Search/Search';
import { useSelector } from 'react-redux';
import { RootState } from '@/RTK/store';



const TopBar = () => {
    const user = useSelector((state: RootState) => state.user)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <StyledAppBarTitle variant="h6" noWrap >

                    </StyledAppBarTitle>
                    <Search />
                    <Stack p={1} spacing={1} direction={'row'}>
                        <Avatar alt="Remy Sharp" src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png' />
                        <Typography variant='body2' alignContent={'center'}>{user.fullName}</Typography>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>)
}

export default TopBar;