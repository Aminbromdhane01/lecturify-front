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
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { decodeAccesToken } from '@/helpers/decodedAceesToken';
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
            case IconType.Essay:
                return <MenuBookIcon/>
            case IconType.Recommandation:
                return <SmartToyIcon/>    
            case IconType.Admin  :
                return <AdminPanelSettingsIcon/>       
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
