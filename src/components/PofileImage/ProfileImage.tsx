import { palette } from '@/theme/palette'
import Image from 'next/image'
import React from 'react'
import { ProfileImageContainer } from './ProfileImage.style'
import { constants } from '@/utils/constants/constants'
interface ProfileImageProps {
  image? : string
}

const ProfileImage = ({image} : ProfileImageProps) => {
  return (
    <ProfileImageContainer >
      {image ? (
        <Image src={image} fill={true} alt={constants.ProfileImage.PROFILE_IMAGE_ALT}/>
      ) : (
        <Image src={constants.ProfileImage.DEFAULT_PROFILE_IMAGE_URL} fill={true} alt={constants.ProfileImage.PROFILE_IMAGE_ALT}/>
      )}
    </ProfileImageContainer>
  )
}

export default ProfileImage