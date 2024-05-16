'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
interface MainDrawerProps {
  DrawerList: React.ReactNode
}

export default function MainDrawer({ DrawerList }: MainDrawerProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Box>
      <Button onClick={toggleDrawer(true)}><MenuRoundedIcon sx={{ color: '#212631', fontSize: '30px' }} /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
}