import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

interface ListItemProps {
  text : string
  icon : React.ReactElement
  href : string
}

const ListElement = ({text , icon , href}: ListItemProps) => {
  const router = useRouter()
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={()=> {router.push(href)}}>
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          <ListItemText>
            <Typography variant='body2'>
              {text}
            </Typography>
          </ListItemText>
      </ListItemButton>
   </ListItem>
  )
}

export default ListElement