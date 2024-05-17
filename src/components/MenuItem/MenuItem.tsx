import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Typography } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ListIcon from '@mui/icons-material/List';
import PersonIcon from '@mui/icons-material/Person';
import IconType from './menu-item.enum';
interface DropDownMenuItemProps {
    handleClose: () => void;
    icon?: string
    content: string
}


const DropDownMenuItem = ({ handleClose, icon, content }: DropDownMenuItemProps) => {
    const renderIcon = () => {
        switch (icon) {
            case IconType.Person:
                return <PersonIcon />;
            case IconType.List:
                return <ListIcon />;
            case IconType.Book:
                return <BookIcon />;
            case IconType.Settings:
                return <Settings />;
            case IconType.Logout:
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
