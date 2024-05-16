'use client'
import BookImage from '@/components/BookImage/BookImage'
import BookInfo from '@/components/BookInfo/BookInfo'
import ProfileImage from '@/components/PofileImage/ProfileImage'
import ProfileInfo from '@/components/ProfileInfo/ProfileInfo'
import TopBar from '@/components/home/top-bar/TopBar'
import MyBooksData from '@/features/profile/MyBooksData'
import InfoCard from '@/layouts/LastReadBookInfo/LastReadBookInfo'
import { Background } from '@/pages/BookDeatails/BookDetails.style'
import React from 'react'

const Profile = () => {
  return (
    <>
    <InfoCard
      type='profile_info' 
      title='User Infos' />
    
    <InfoCard
      type='book_info'
      insideCardTitle='Last Published Book'
           />
    <MyBooksData/>
    
    </>
  )
}

export default Profile
