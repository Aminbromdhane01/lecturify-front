import React from 'react'
import DropDownMenuItem from '../MenuItem/MenuItem'
import Menu from '@mui/material/Menu';
import { NonDecoratedLink } from '../IconicButton/IconButton.style';
import { Divider } from '@mui/material';
import LogoutMenuItem from '../LogoutMenuItem/LogoutMenuItem';
import { endpoints } from '@/utils/endpoints';
import { constants } from '@/utils/constants/constants';
import { decodeAccesToken } from '@/helpers/decodedAceesToken';
const menuItems = [
    { icon: 'person', content: constants.MenuItems.PROFILE_EN, href: endpoints.PROFILE_VUE_URL },
    { icon: 'list', content: constants.MenuItems.WISHLIST_EN, href: endpoints.WISH_LIST_VUE_URL },
    { icon: 'book', content: constants.MenuItems.ADD_BOOK_EN, href: endpoints.ADD_BOOK_VUE_URL },
    { icon: 'settings', content: constants.MenuItems.SETTINGS_EN, href: "#" },
    { icon : 'essay' , content : constants.MenuItems.ESSAY_EN , href : endpoints.ESSAY_URL},
    { icon : 'essay' , content : 'Essays List' , href : "/essay/list" },
    { icon : 'recommandation' , content : constants.MenuItems.RECOMMANDATION_EN , href : endpoints.RECOMMANDATION_VUE_URL },
    { icon : 'admin' , content : 'Admin Dashboard' , href : "/admin-dashboard" }

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
            {menuItems.map((item, index) => {
                if (item.icon === 'admin' && decodeAccesToken() && decodeAccesToken().role !== 'ADMIN') {
                    return null; 
                }
                return (
                    <NonDecoratedLink href={item.href} key={index}>
                        <DropDownMenuItem handleClose={handleClose} icon={item.icon} content={item.content} />
                    </NonDecoratedLink>
                )
            })}
            <Divider />
            <LogoutMenuItem logout={logout} />

        </Menu>
    )
}

export default HomeDropDownMenu