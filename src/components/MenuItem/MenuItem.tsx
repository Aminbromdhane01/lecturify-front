import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Typography } from '@mui/material';

interface DropDownMenuItemProps {
    handleClose: () => void;
    icon?: React.ReactElement
    content: string
}


const DropDownMenuItem = ({ handleClose, icon, content }: DropDownMenuItemProps) => {
    return (
        <MenuItem onClick={handleClose} color='white'>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <Typography color={'#707070'}>{content}</Typography>
        </MenuItem>
    )
}

export default DropDownMenuItem
