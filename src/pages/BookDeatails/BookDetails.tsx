'use client'
import BookImage from "@/components/BookImage/BookImage"
import CardButton from "@/components/CardButton/CardButton"
import { Box, Grid, Rating, Stack, Typography } from "@mui/material"
import IconicButton from "@/components/IconicButton/IconicButton";
import IconTextTag from "@/components/IconTextTag/IconTextTag";
import { useState } from "react";
import TransitionsModal from "@/layouts/Modal/Modal";
import CommentSection from "@/features/comment/CommentSection";
import { extractUTCDate } from "@/helpers/dateToUTCDateString";
import { constants } from "@/utils/constants/constants";
import { AboutBookContainer, AuthorName, BookDetailsContainer, BookDetailsPaper, BookInfoContainer, ButtonGrid, StyledDownloadForOfflineIcon, StyledLibraryAddIcon, StyledReviewsIcon, Title } from "@/components/Book/Book.style";
import { PublicationDate } from "@/components/BookInfo/BookInfo.style";
import { EssaysListContainer } from "@/components/Essays/Essays.style";
import { BookInformationsContainer } from "@/components/BookPage/BookPage.style";
import Link from "next/link";
import { useAddToWishlistMutation } from "@/RTK/api/BookApi";
import { decodeAccesToken } from "@/helpers/decodedAceesToken";
import useAlert from "@/hooks/useAlert";
import ControlledAlert from "@/components/ControlledAlert/ControllerdAlert";
export interface BookDetailsProps {
    author: string;
    title: string;
    publicationDate: string;
    rating: string;
    numberofVotes: number;
    description: string;
    id : number
    content : string
    image : string
}

const BookDetails = ({ author, title, publicationDate, rating, numberofVotes, description , id , content , image}: BookDetailsProps) => {
   
    return (
        <></>
    )
}

export default BookDetails
