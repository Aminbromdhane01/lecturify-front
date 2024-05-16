'use client'
import { Avatar, Box, Hidden, Paper } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import MainDrawer from '../MainDrawer/MainDrawer';
import Sidebar from '../Sidebar/Sidebar';
import { AdminTopBarContainer, AdminTopBarPaper } from './AdminTopBar.style';

const AdminTopBar = () => {
  return (
    <AdminTopBarPaper elevation={1}>
      <AdminTopBarContainer>
        <Hidden smUp>
        <Box><MainDrawer DrawerList={<Sidebar/>}/></Box>
        </Hidden>
        <Box><Avatar alt="Remy Sharp" src="/admin.svg" sizes='small'/></Box>
      </AdminTopBarContainer> 
    </AdminTopBarPaper>
  )
}

export default AdminTopBar
