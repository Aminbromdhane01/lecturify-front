import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ListElement from '../ListItem/ListElement';
import DatasetIcon from '@mui/icons-material/Dataset';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';

const Sidebar = () => {
  return (
    <Box sx={{ width: '100%' , height : '100%', backgroundColor : '#212631', color :'#f3f4f7' , display : 'flex' , flexDirection : 'column' , justifyContent :'space-between'}} role="presentation">
        <Box>
      <ListElement text='Admin Dashboard' icon = {<AdminPanelSettingsRoundedIcon sx={{color : '#f3f4f7'}}/>} href='/admin-dashboard'></ListElement>
        <Divider sx={{color : 'white'}}/>
      <List>
        <ListElement text='Data' icon = {<DatasetIcon sx={{color : '#f3f4f7'}}/>}  href='/admin-dashboard/data-tables/users-data-table'/>
        <ListElement text='Charts' icon = {<QueryStatsIcon sx={{color : '#f3f4f7'}}/>} href='/admin-dashboard/stats'/>
     </List>
     </Box>
     <Box>
      <List>
        <ListElement text='Home' icon = {<HomeIcon sx={{color : '#f3f4f7'}}/>}  href='/admin-dashboard/data-tables/'/>
        <ListElement text='Disconnect' icon = {<PowerSettingsNewIcon sx={{color : '#f3f4f7'}}/>} href='/admin-dashboard/stats'/>
     </List>
     </Box>
      
    </Box>
  )
}

export default Sidebar
