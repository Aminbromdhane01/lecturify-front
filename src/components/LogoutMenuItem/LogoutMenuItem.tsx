import { ListItemIcon, MenuItem, Typography } from '@mui/material'
import Logout from '@mui/icons-material/Logout';

import React from 'react'

interface LogoutMenuItempProps {
    logout?: () => void
}

const LogoutMenuItem = ({ logout }: LogoutMenuItempProps) => {
    return (
        <MenuItem onClick={logout} color='white'>
            <ListItemIcon>
                <Logout />
            </ListItemIcon>
            <Typography color={'#707070'}>Logout</Typography>
        </MenuItem>
    )
}

export default LogoutMenuItem
