import { constants } from '@/utils/constants/constants'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack } from '@mui/material'
import React from 'react'
interface RadioProps {
  register : any
}
const GenderRadioButton = ({register} :RadioProps) => {
  return (
    <FormControl>
    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
    <RadioGroup 
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="Female"
    >
      <Stack direction={'row'} marginTop={2}>
      <FormControlLabel {...register('gender')} value={constants.GenderRadioButton.FEMALE} control={<Radio />} label="Female" />
      <FormControlLabel {...register('gender')} value={constants.GenderRadioButton.MALE} control={<Radio />} label="Male" />
      </Stack>
    </RadioGroup>
  </FormControl>
  )
}

export default GenderRadioButton
