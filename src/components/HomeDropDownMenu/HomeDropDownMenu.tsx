import React from 'react'
import DropDownMenuItem from '../MenuItem/MenuItem'
import BookIcon from '@mui/icons-material/Book';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ListIcon from '@mui/icons-material/List';
import PersonIcon from '@mui/icons-material/Person';
import Menu from '@mui/material/Menu';
import { NonDecoratedLink } from '../IconicButton/IconButton.style';
import { Divider } from '@mui/material';
import LogoutMenuItem from '../LogoutMenuItem/LogoutMenuItem';
const menuItems = [
    { icon: <PersonIcon />, content: 'Profile', href: "#" },
    { icon: <ListIcon />, content: 'Wishlist', href: "#" },
    { icon: <BookIcon />, content: 'Add New Book', href: "#" },
    { icon: <Settings />, content: 'Settings', href: "#" },

];
interface HomeDropDownMenuProps {
    handleClose: () => void;
    logout?: () => void
    anchorEL: null | HTMLElement
    open: boolean
}
const HomeDropDownMenu = ({ handleClose, anchorEL, open, logout }: HomeDropDownMenuProps) => {
    return (
        <Menu
            anchorEl={anchorEL}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}

        >
            {menuItems.map((item, index) => (
                <NonDecoratedLink href={item.href} ><DropDownMenuItem handleClose={handleClose} icon={item.icon} content={item.content} key={index} /></NonDecoratedLink>
            ))}
            <Divider />
            <LogoutMenuItem logout={logout} />

        </Menu>
    )
}

export default HomeDropDownMenu