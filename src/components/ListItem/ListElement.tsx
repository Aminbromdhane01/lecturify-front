import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'
import { StyledAdminPanelSettingsRoundedIcon, StyledDatasetIcon, StyledHomeIcon, StyledPowerSettingsNewIcon, StyledQueryStatsIcon } from './ListElement.style';
import { IconType } from '../ListItem/list-elemnt-enum';

interface ListItemProps {
  text : string
  icon : string
  href : string
}
const getIconComponent = (icon: string): React.ReactElement => {
  switch (icon) {
    case IconType.Dataset:
      return <StyledDatasetIcon />;
    case IconType.QueryStats:
      return <StyledQueryStatsIcon  />;
    case IconType.AdminPanelSettings:
      return <StyledAdminPanelSettingsRoundedIcon  />;
    case IconType.HomeIcon :
       return <StyledHomeIcon/>;
    case IconType.PowerSettingsNewIcon :
       return <StyledPowerSettingsNewIcon/>;    
    default:
      return <></>; 
  }
};

const ListElement = ({text , icon , href}: ListItemProps) => {
  const router = useRouter()
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={()=> {router.push(href)}}>
          <ListItemIcon>
            {getIconComponent(icon)}
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