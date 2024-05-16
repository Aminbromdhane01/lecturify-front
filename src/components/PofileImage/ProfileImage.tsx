import { palette } from '@/theme/palette'
import Image from 'next/image'
import React from 'react'
import { ProfileImageContainer } from './ProfileImage.style'
interface ProfileImageProps {
  image? : string
}

const ProfileImage = ({image} : ProfileImageProps) => {
  return (
    <ProfileImageContainer >
      {image ? (
        <Image src={image} fill={true} alt='Profile Image'/>
      ) : (
        <Image src="https://www.w3schools.com/w3images/avatar2.png" fill={true} alt='Profile Image'/>
      )}
    </ProfileImageContainer>
  )
}

export default ProfileImage