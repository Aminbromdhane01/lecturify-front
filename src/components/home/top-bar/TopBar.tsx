'use client'
import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Stack, Typography, styled } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '@/RTK/store';
import AccountMenu from '@/components/DropdownMenu/DropDownMenu';
import HomeIcon from '@mui/icons-material/Home';
import Search from '../search/Search';
import { usePathname, useRouter } from 'next/navigation';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { NavbarButton } from '../FieldAppbar/FieldAppbar.style';
import BookIcon from '@mui/icons-material/Book';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { endpoints } from '@/utils/endpoints';
import StarIcon from '@mui/icons-material/Star';
import { AppBarContainer, StyledAppBarTitle } from './topbar.style';
import EditIcon from '@mui/icons-material/Edit';
import { constants } from '@/utils/constants/constants';
import IconType from './top-bar.enum';



const TopBar = () => {
    const user = useSelector((state: RootState) => state.user)
    const [icon , setIcon] = useState<string>('')
    const router = useRouter()
    const pathname = usePathname()

    const setIconBasedOnPage = () => {
        
        if (pathname === endpoints.HOME_VUE_URL) {
            setIcon('home');      
        } else if (pathname === endpoints.PROFILE_VUE_URL) {            
            setIcon('accountBox');
        } else if (pathname === endpoints.ADD_BOOK_VUE_URL) {
            setIcon('addCircleOutline');
        } else if (pathname?.startsWith(endpoints.BOOK_DETAILS_VUE_URL_START_WITH)) {
            setIcon('book');
        } else if (pathname === endpoints.WISH_LIST_VUE_URL) {
            setIcon('star');
        } else if (pathname === endpoints.EDIT_PROFILE_VUE_URL) {
            setIcon('edit');
        }
        };
        const renderIcon = () => {
            switch (icon) {
                case IconType.Home:
                    return <HomeIcon fontSize='large' />;
                case IconType.AccountBox:
                    return <AccountBoxIcon fontSize='large' />;
                case IconType.AddCircleOutline:
                    return <AddCircleOutlineIcon fontSize='large' />;
                case IconType.Book:
                    return <BookIcon fontSize='large' />;
                case IconType.Star:
                    return <StarIcon fontSize='large' />;
                case IconType.Edit:
                    return <EditIcon fontSize='large' />;
                default:
                    return null;
            }
        };    
    
    useEffect(() => {
        setIconBasedOnPage();  
      }, [pathname]);
    return (
        <AppBarContainer>
            <AppBar position="static">
                <Toolbar>
                    <StyledAppBarTitle variant="h6" noWrap >
                        {renderIcon()}
                    </StyledAppBarTitle>
                    { pathname !== endpoints.HOME_VUE_URL &&
                    <Stack direction={'row'} alignSelf={'left'}>
                    <NavbarButton borderRadius={'50px'} onClick={()=> {router.back()}}>
                            <Typography variant='body1' fontWeight={'bold'} >{constants.TopBar.BACK}</Typography>
                    </NavbarButton>
                    <NavbarButton borderRadius={'50px'} onClick={()=>{router.push(endpoints.HOME_VUE_URL)}}>
                            <Typography variant='body1' fontWeight={'bold'}>{constants.TopBar.HOME}</Typography>
                    </NavbarButton>
                    {pathname == endpoints.PROFILE_VUE_URL && 
                    <NavbarButton borderRadius={'50px'} onClick={()=>{router.push(endpoints.EDIT_PROFILE_VUE_URL)}}>
                            <Typography variant='body1' fontWeight={'bold'}>{constants.TopBar.COMPLETE_YOUR_PROFILE}</Typography>
                    </NavbarButton>
                    }
                   
                    </Stack>}
                    {pathname == endpoints.HOME_VUE_URL && <Search />}
                    <Stack p={1} spacing={1} direction={'row'}>
                        <AccountMenu />
                        <Typography variant='body2' alignContent={'center'}>{user.fullName}</Typography>
                    </Stack>
                </Toolbar>
            </AppBar>
        </AppBarContainer>)
}

export default TopBar;