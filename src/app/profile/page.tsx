'use client'
import BookImage from '@/components/BookImage/BookImage'
import BookInfo from '@/components/BookInfo/BookInfo'
import ProfileImage from '@/components/PofileImage/ProfileImage'
import ProfileInfo from '@/components/ProfileInfo/ProfileInfo'
import TopBar from '@/components/home/top-bar/TopBar'
import MyBooksData from '@/features/profile/MyBooksData'
import InfoCard from '@/layouts/LastReadBookInfo/LastReadBookInfo'
import { InfoCardType } from '@/layouts/LastReadBookInfo/last-readed-book.enum'
import { Background } from '@/pages/BookDeatails/BookDetails.style'
import { constants } from '@/utils/constants/constants'
import React from 'react'

const Profile = () => {
  return (
    <>
    <InfoCard
      type= {InfoCardType.ProfileInfo}
      title={constants.Profile.PROFILE_INFO_CARD_TITLE} />
    
    <InfoCard
      type={InfoCardType.BookInfo}
      insideCardTitle={constants.Profile.BOOK_INFO_CARD_TITLE}
           />
    <MyBooksData/>
    
    </>
  )
}

export default Profile
