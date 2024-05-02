'use client'
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Stack, Typography, styled } from '@mui/material';
import StyledAppBarTitle from '@/components/home/top-bar/topbar.style';
import { useSelector } from 'react-redux';
import { RootState } from '@/RTK/store';
import AccountMenu from '@/components/DropdownMenu/DropDownMenu';
import HomeIcon from '@mui/icons-material/Home';
import Search from '../search/Search';




const TopBar = () => {
    const user = useSelector((state: RootState) => state.user)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <StyledAppBarTitle variant="h6" noWrap >
                        <HomeIcon fontSize='large' />
                    </StyledAppBarTitle>
                    <Search />
                    <Stack p={1} spacing={1} direction={'row'}>
                        <AccountMenu />
                        <Typography variant='body2' alignContent={'center'}>{user.fullName}</Typography>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>)
}

export default TopBar;