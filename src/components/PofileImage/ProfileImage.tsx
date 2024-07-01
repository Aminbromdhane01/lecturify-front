'use client'
import { palette } from '@/theme/palette'
import Image from 'next/image'
import React from 'react'
import { ProfileImageContainer } from './ProfileImage.style'
import { constants } from '@/utils/constants/constants'
import { useSelector } from 'react-redux'
import { RootState } from '@/RTK/store'
interface ProfileImageProps {
  image? : string
}


const ProfileImage = ({image} : ProfileImageProps) => {
  const {picture} = useSelector((state: RootState) => state.profil);

  return (
    <ProfileImageContainer >
      {picture &&
        <Image src={picture} fill={true} alt={constants.ProfileImage.PROFILE_IMAGE_ALT}/>
     }
    </ProfileImageContainer>
  )
}

export default ProfileImage