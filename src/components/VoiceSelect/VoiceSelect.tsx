import { constants } from '@/utils/constants/constants'
import { Avatar, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material'
import React from 'react'
interface VoiceSelectProps {
    value : string
    handleChange : (event: SelectChangeEvent) => void
}
const VoiceSelect = ({value , handleChange} : VoiceSelectProps) => {
  return (
    <Select
    sx={{width : '50%'}}
    value={value}
    onChange={handleChange}
    displayEmpty
    inputProps={{ 'aria-label': 'Without label' }}
  >
    <MenuItem value={'male'}><Stack direction={'row'}>
      <Avatar alt="Travis Howard" src={constants.RecommandationModule.MEN_VOICE_IMAAGE_URL} /> 
      <Typography ml={1} variant='body2' fontWeight={'bold'} pt={1}>Male Voice</Typography>
      </Stack></MenuItem>
    <MenuItem value={'female'}><Stack direction={'row'}>
      <Avatar alt="Travis Howard" src={constants.RecommandationModule.WOMEN_VOICE_IMAGE_URL} /> 
      <Typography ml={1} variant='body2' fontWeight={'bold'} pt={1}>Female Voice</Typography>
      </Stack></MenuItem>
    
  </Select> )
}

export default VoiceSelect
