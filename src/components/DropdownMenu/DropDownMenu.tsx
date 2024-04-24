import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import HomeDropDownMenu from '../HomeDropDownMenu/HomeDropDownMenu';
import { deleteTokens } from '@/helpers/deleteTokens';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { clearUser } from '@/RTK/slices/UserSlice';

interface AccountMenuProps {
    profileImage?: string
}

export default function AccountMenu({ profileImage }: AccountMenuProps) {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const router = useRouter();
    const dispatch = useDispatch()

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = async () => {
        await deleteTokens()
        await dispatch(clearUser())
        router.push('/auth/login')
    }
    return (
        <React.Fragment>
            <Box >
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar alt="Remy Sharp" src={profileImage} />
                    </IconButton>
                </Tooltip>
            </Box>
            <HomeDropDownMenu handleClose={handleClose} open={open} anchorEL={anchorEl} logout={handleLogout} />



        </React.Fragment >
    );
}