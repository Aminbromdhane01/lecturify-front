import { constants } from '@/utils/constants/constants'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack } from '@mui/material'
import React from 'react'

const GenderRadioButton = () => {
  return (
    <FormControl>
    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="female"
      name="radio-buttons-group"
    >
      <Stack direction={'row'} marginTop={2}>
      <FormControlLabel value={constants.GenderRadioButton.FEMALE} control={<Radio />} label="Female" />
      <FormControlLabel value={constants.GenderRadioButton.MALE} control={<Radio />} label="Male" />
      </Stack>
    </RadioGroup>
  </FormControl>
  )
}

export default GenderRadioButton
