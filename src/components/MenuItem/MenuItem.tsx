import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Typography } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ListIcon from '@mui/icons-material/List';
import PersonIcon from '@mui/icons-material/Person';
interface DropDownMenuItemProps {
    handleClose: () => void;
    icon?: string
    content: string
}


const DropDownMenuItem = ({ handleClose, icon, content }: DropDownMenuItemProps) => {
    const renderIcon = () => {
        switch (icon) {
            case 'person':
                return <PersonIcon />;
            case 'list':
                return <ListIcon />;
            case 'book':
                return <BookIcon />;
            case 'settings':
                return <Settings />;
            case 'logout':
                return <Logout />;
            default:
                return null;
        }
    };
    return (
        <MenuItem onClick={handleClose} color='white'>
            <ListItemIcon>
                {renderIcon()}
            </ListItemIcon>
            <Typography color={'#707070'}>{content}</Typography>
        </MenuItem>
    )
}

export default DropDownMenuItem
