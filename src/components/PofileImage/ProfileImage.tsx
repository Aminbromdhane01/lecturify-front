import { palette } from '@/theme/palette'
import Image from 'next/image'
import React from 'react'
import { ProfileImageContainer } from './ProfileImage.style'

const ProfileImage = () => {
  return (
    <ProfileImageContainer >
      <Image src={'/avatar.png'} fill={true} alt='Profile Image'/>
    </ProfileImageContainer>
  )
}

export default ProfileImage