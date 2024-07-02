'use client'
import BookImage from '@/components/BookImage/BookImage'
import BookInfo from '@/components/BookInfo/BookInfo'
import { BookInformationsContainer } from '@/components/BookPage/BookPage.style'
import ProfileImage from '@/components/PofileImage/ProfileImage'
import ProfileInfo from '@/components/ProfileInfo/ProfileInfo'
import RecommandedBooks from '@/components/RecommandedBooks/RecommandedBooks'
import TopBar from '@/components/home/top-bar/TopBar'
import MyBooksData from '@/features/profile/MyBooksData'
import InfoCard from '@/layouts/LastReadBookInfo/LastReadBookInfo'
import { InfoCardType } from '@/layouts/LastReadBookInfo/last-readed-book.enum'
import WithAuth from '@/utils/WithAuth'
import { constants } from '@/utils/constants/constants'
import React from 'react'

const Profile = () => {
  return (
    <BookInformationsContainer>
    <InfoCard
      type= {InfoCardType.ProfileInfo}
      title={constants.Profile.PROFILE_INFO_CARD_TITLE} />
    
    <RecommandedBooks/>
    <MyBooksData/>
    
    </BookInformationsContainer>
  )
}

export default WithAuth(Profile)
