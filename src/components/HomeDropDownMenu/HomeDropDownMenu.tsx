import React from 'react'
import DropDownMenuItem from '../MenuItem/MenuItem'
import Menu from '@mui/material/Menu';
import { NonDecoratedLink } from '../IconicButton/IconButton.style';
import { Divider } from '@mui/material';
import LogoutMenuItem from '../LogoutMenuItem/LogoutMenuItem';
import { endpoints } from '@/utils/endpoints';
import { constants } from '@/utils/constants/constants';
const menuItems = [
    { icon: 'person', content: constants.MenuItems.PROFILE_EN, href: endpoints.PROFILE_VUE_URL },
    { icon: 'list', content: constants.MenuItems.WISHLIST_EN, href: endpoints.WISH_LIST_VUE_URL },
    { icon: 'book', content: constants.MenuItems.ADD_BOOK_EN, href: endpoints.ADD_BOOK_VUE_URL },
    { icon: 'settings', content: constants.MenuItems.SETTINGS_EN, href: "#" },

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