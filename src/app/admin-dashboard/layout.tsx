'use client'
import AdminTopBar from '@/components/AdminTopbar/AdminTopBar';
import Sidebar from '@/components/Sidebar/Sidebar';
import { AdminBackground } from '@/features/admin/BookDataTables.tsx/BookDataTable.style';
import { palette } from '@/theme/palette';
import { Grid, Hidden } from '@mui/material';
import React from 'react'
const AdminDashboardLayout = (
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) => {
    return (
        <main>
            <Grid container height={'100vh'} sx={{overflowX : 'hidden'}} >
                <Hidden smDown>
                <Grid item xs={2} >
                   <Sidebar/>
                </Grid>
                </Hidden>  
                <Grid  item sm={10} xs={12} bgcolor={palette.lightGrey}>
                {children}
                </Grid>
           </Grid>
          
           
        </main>
    )
}

export default AdminDashboardLayout