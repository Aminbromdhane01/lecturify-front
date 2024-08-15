'use client'
import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Badge, BadgeProps, IconButton, Stack, Typography, styled, Popover, List, ListItem, ListItemText } from '@mui/material';
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
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ListIcon from '@mui/icons-material/List';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Notification, useLazyGetUserNotificationsQuery, useMarkAllNotificationsAsReadMutation } from '@/RTK/api/NotificationApi';
import { decodeAccesToken } from '@/helpers/decodedAceesToken';

const TopBar = () => {
    const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));
  

    
    const [icon, setIcon] = useState<string>('')
    const user = useSelector((state: RootState) => state.user)
    const router = useRouter()
    const pathname = usePathname()
    const showTopBarPaths = [
        endpoints.HOME_VUE_URL,
        endpoints.PROFILE_VUE_URL,
        endpoints.ADD_BOOK_VUE_URL,
        endpoints.BOOK_DETAILS_VUE_URL_START_WITH,
        endpoints.WISH_LIST_VUE_URL,
        endpoints.EDIT_PROFILE_VUE_URL,
        endpoints.ESSAY_VUE_URL,
        endpoints.ESSAY_LIST_URL,
        endpoints.ESSAY_DETAILS_REGEX,
        endpoints.BOOK_DETAILS_REGEX,
        endpoints.RECOMMANDATION_VUE_URL,
    ];
    const [fetch,{ data : notifications, error, isLoading }] = useLazyGetUserNotificationsQuery();
    const [markAllAsRead] = useMarkAllNotificationsAsReadMutation(); 

    useEffect(()=>{
        if (decodeAccesToken()){
        fetch(decodeAccesToken().sub)}
    },[])

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
        } else if (pathname === endpoints.ESSAY_VUE_URL) {
            setIcon('essay')
        } else if (pathname === endpoints.ESSAY_LIST_URL) {
            setIcon('essayList');
        } else if (pathname?.startsWith(endpoints.ESSAY_DETAILS_STARTS_WITH)) {
            setIcon('essayDetails')
        } else if (pathname === endpoints.RECOMMANDATION_VUE_URL) {
            setIcon('recommendation');
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
            case IconType.Essay:
                return <MenuBookIcon fontSize='large' />;
            case IconType.EssayList:
                return <ListIcon fontSize='large' />;
            case IconType.EssayDetails:
                return <RemoveRedEyeIcon fontSize='large' />;
            case IconType.Recommandation:
                return <SmartToyIcon fontSize='large' />;
            default:
                return null;
        }
    };
    const handleNotificationsClick = (event: React.MouseEvent<HTMLElement>) => {
        if (decodeAccesToken()) {
        markAllAsRead({ userId : decodeAccesToken().sub});}
    };
    useEffect(() => {
        setIconBasedOnPage();
    }, [pathname]);

    

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    if (!showTopBarPaths.some(path => typeof path === 'string' ? path === pathname : path.test(pathname as string))) {
        return null;
    }
    return (
        <AppBarContainer>
            <AppBar position="static">
                <Toolbar>
                    <StyledAppBarTitle variant="h6" noWrap >
                        {renderIcon()}
                    </StyledAppBarTitle>
                    {pathname !== endpoints.HOME_VUE_URL &&
                        <Stack direction={'row'} alignSelf={'left'}>
                            <NavbarButton borderRadius={'50px'} onClick={() => { router.back() }}>
                                <Typography variant='body1' fontWeight={'bold'}>{constants.TopBar.BACK}</Typography>
                            </NavbarButton>
                            <NavbarButton borderRadius={'50px'} onClick={() => { router.push(endpoints.HOME_VUE_URL) }}>
                                <Typography variant='body1' fontWeight={'bold'}>{constants.TopBar.HOME}</Typography>
                            </NavbarButton>
                            {pathname == endpoints.PROFILE_VUE_URL &&
                                <NavbarButton borderRadius={'50px'} onClick={() => { router.push(endpoints.EDIT_PROFILE_VUE_URL) }}>
                                    <Typography variant='body1' fontWeight={'bold'}>{constants.TopBar.COMPLETE_YOUR_PROFILE}</Typography>
                                </NavbarButton>
                            }

                        </Stack>}
                    {pathname == endpoints.HOME_VUE_URL && <Search />}
                    <Stack p={1} spacing={1} direction={'row'}>
                        <IconButton aria-label="notifications" onClick={handleNotificationsClick}>
                            <StyledBadge badgeContent={notifications?.filter(notification => !notification.isRead).length} color="secondary">
                                <NotificationsIcon sx={{ color: 'white' }} />
                            </StyledBadge>
                        </IconButton>
                        <Popover
                            open={open}
                            onClose={handlePopoverClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                        >
                            <List>
                                {notifications?.length as number > 0 ? (
                                    notifications?.map((notification) => (
                                        <ListItem key={notification.id} sx={{width : '250px'}}>
                                            <ListItemText primary={notification.content} />
                                        </ListItem>
                                    ))
                                ) : (
                                    <ListItem>
                                        <ListItemText primary="No notifications" />
                                    </ListItem>
                                )}
                            </List>
                        </Popover>
                        <AccountMenu />
                        <Typography variant='body2' alignContent={'center'}>{user.fullName}</Typography>
                    </Stack>
                </Toolbar>
            </AppBar>
        </AppBarContainer>
    )
}

export default TopBar;
