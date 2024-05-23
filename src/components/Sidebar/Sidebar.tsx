import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ListElement from '../ListItem/ListElement';
import DatasetIcon from '@mui/icons-material/Dataset';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import { SidebarContainer } from './Sidebar.style';
import { IconType } from '../ListItem/list-elemnt-enum';

const Sidebar = () => {
  return (
    <SidebarContainer  role="presentation">
        <Box>
      <ListElement text='Admin Dashboard' icon = {IconType.AdminPanelSettings} href='/admin-dashboard'></ListElement>
        <Divider sx={{color : 'white'}}/>
      <List>
        <ListElement text='Data' icon = {IconType.Dataset}  href='/admin-dashboard/data-tables/users-data-table'/>
        <ListElement text='Charts' icon = {IconType.QueryStats} href='/admin-dashboard/stats'/>
     </List>
     </Box>
     <Box>
      <List>
        <ListElement text='Home' icon = {IconType.HomeIcon}  href='/admin-dashboard/data-tables/'/>
        <ListElement text='Disconnect' icon = {IconType.PowerSettingsNewIcon} href='/admin-dashboard/stats'/>
     </List>
     </Box>
      
    </SidebarContainer>
  )
}

export default Sidebar
