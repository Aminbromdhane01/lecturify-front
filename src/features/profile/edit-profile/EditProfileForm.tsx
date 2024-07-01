'use client'
import { useEditProfileMutation } from '@/RTK/api/ProfileApi'
import { BookDetailsContainer } from '@/components/Book/Book.style'
import { BookInformationsContainer } from '@/components/BookPage/BookPage.style'
import GenderRadioButton from '@/components/GenderRadioButton/GenderRadioButton'
import PhoneNumberInput from '@/components/PhoneNumberInput/PhoneNumberInput'
import { decodeAccesToken } from '@/helpers/decodedAceesToken'
import ActionButton from '@/layouts/Button/ActionButton'
import Input from '@/layouts/Input/Input'
import { palette } from '@/theme/palette'
import { FormControl, FormControlLabel, FormLabel, Grid, InputLabel, Radio, RadioGroup, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import useAlert from '@/hooks/useAlert'
import ControlledAlert from '@/components/ControlledAlert/ControllerdAlert'
import { constants } from '@/utils/constants/constants'
import { useSelector } from 'react-redux'
import { RootState } from '@/RTK/store'

interface Profile {
    picture : File[];
    adress? : string;
    gender? : string;

}

const EditProfileForm = () => {
    const profile = useSelector((state: RootState) => state.profil);

    const [value, setValue] = useState<string>(profile.phonenumber as string)
    
    const [EditProfileMutation, { data: response, isLoading, isError, isSuccess, error }] = useEditProfileMutation();

    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<Profile>(
        {
            defaultValues: {
              adress: profile.adress as string
            }
          }
    )
    const onSubmit: SubmitHandler<Profile> = async (data) => {
        
       await EditProfileMutation({userId :decodeAccesToken().sub , editProfileData : {picture : data.picture[0]  , adress : data.adress , gender : data.gender == 'Male' ? true : false , phonenumber : value}})
     }
     const { open: isOpen, alertMessage: errorMessage, handleCloseAlert: handleCloseEroorAlert } = useAlert(isError, error);
     const { open : opened, alertMessage, handleCloseAlert } = useAlert(isSuccess);
  return (
    <BookInformationsContainer>
         {opened && <ControlledAlert open={opened} handleClose={handleCloseAlert} duration={6000} content={constants.Profile.PROFILE_UPDATED_MESSAGE} severity="success" />}
         {isOpen && <ControlledAlert open={isOpen} handleClose={handleCloseEroorAlert} duration={3000} content={errorMessage} severity="error" />}
        <form onSubmit={handleSubmit(onSubmit)}>
         <Grid container spacing={5} >
           <Grid item xs={12} marginTop={2}>
             <Stack direction={'row'} alignItems={'center'}>
               <Image src={'/profile.svg'} alt='Book Form Image' height={70} width={100} />
               <Typography variant="h5" color={palette.darkCharcoalText} fontWeight={'bold'} >Edit Profile</Typography>
             </Stack>
         </Grid>
         <Grid item xs={3} >
            {profile.picture &&
           <Image src={profile.picture} alt='Book Form Image' height={70} width={100}  style={{borderRadius :'50px'}}/>}
           </Grid>
          <Grid item xs={9}>
            <Input
             type="file"
             placeholder="Choose Your Profile Image"
             label="Profile Image"
             register={register('picture')}
            />
           </Grid>
           
           
    <Grid item xs={6}>
     <GenderRadioButton register={register}/>
    </Grid>
    <Grid item xs={6}>
        <Input
            type="text"
            placeholder="Enter Your Adress"
            label="Adress"
            register={register('adress')}
        />
    </Grid>
    
    
    <Grid item xs={12}>
     <InputLabel>Phone Number</InputLabel>

     <PhoneInput
      inputStyle={{height :'40px' , width : '100%'}}
      value={value}
      onChange={value=>setValue(value)}
      />
     </Grid>
     <Grid item xs={3}>
    
     </Grid>
  
    <Grid item xs={12}>
        <ActionButton content={'Send'} variant="contained" disabled={false} />
    </Grid>
    

</Grid>
</form>
</BookInformationsContainer>
  )
}

export default EditProfileForm