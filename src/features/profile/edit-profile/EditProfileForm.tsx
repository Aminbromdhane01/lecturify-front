import { BookDetailsContainer } from '@/components/Book/Book.style'
import { BookInformationsContainer } from '@/components/BookPage/BookPage.style'
import GenderRadioButton from '@/components/GenderRadioButton/GenderRadioButton'
import PhoneNumberInput from '@/components/PhoneNumberInput/PhoneNumberInput'
import ActionButton from '@/layouts/Button/ActionButton'
import Input from '@/layouts/Input/Input'
import { palette } from '@/theme/palette'
import { FormControl, FormControlLabel, FormLabel, Grid, InputLabel, Radio, RadioGroup, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const EditProfileForm = () => {
  return (
    <BookInformationsContainer>
    <Grid container spacing={5} >
    <Grid item xs={12} marginTop={2}>
        <Stack direction={'row'} alignItems={'center'}>
            <Image src={'/profile.svg'} alt='Book Form Image' height={70} width={100} />
            <Typography variant="h5" color={palette.darkCharcoalText} fontWeight={'bold'} >Edit Profile</Typography>
        </Stack>
    </Grid>
    <Grid item xs={6}>
        <Input
            type="file"
            placeholder="Choose Your Profile Image"
            label="Profile Image"
            
        />
    </Grid>
    <Grid item xs={6}>
        <Input
            type="date"
            placeholder="Enter Your Birtdhay"
            label="Birthday"
            
        />
    </Grid>
    <Grid item xs={6}>
     <GenderRadioButton/>
    </Grid>
    <Grid item xs={6}>
        <Input
            type="text"
            placeholder="Enter Your Adress"
            label="Adress"
            
        />
    </Grid>
    
    
    <Grid item xs={12}>
    <InputLabel>Phone Number</InputLabel>

    <PhoneNumberInput/>
    </Grid>
    <Grid item xs={3}>
    
    </Grid>
  
    <Grid item xs={12}>
        <ActionButton content={'Send'} variant="contained" disabled={false} />
    </Grid>
    

</Grid>
</BookInformationsContainer>
  )
}

export default EditProfileForm