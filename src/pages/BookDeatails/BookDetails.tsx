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
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [AddToWishlistMutation, { data: response, isLoading, isError, isSuccess, error }] = useAddToWishlistMutation();
    const onClick = async () => {
        
        await AddToWishlistMutation({userId : decodeAccesToken().sub , bookId : id}) 
             
    }
    const { open: isOpen, alertMessage: errorMessage, handleCloseAlert: handleCloseEroorAlert } = useAlert(isError, error);
    const { open : opened, alertMessage, handleCloseAlert } = useAlert(isSuccess);
    return (
        <BookInformationsContainer>
            <Box p={1}>
            {opened && <ControlledAlert open={opened} handleClose={handleCloseAlert} duration={6000} content={'The Book is Added Succusfully to your wishlist'} severity="success" />}
            {isOpen && <ControlledAlert open={isOpen} handleClose={handleCloseEroorAlert} duration={3000} content={errorMessage} severity="error" />}
                <Title variant="h6" align="center">{constants.BookDetails.ABOUT_BOOK_EN}</Title></Box>
            <BookDetailsContainer  >
                <BookDetailsPaper elevation={2}>
                    <Grid container direction={'column'}>
                        <Grid item xs={3}>
                            <BookImage url={image} />
                        </Grid>

                        <Grid item xs={8}>
                            <BookInfoContainer>
                                <Typography variant="h4" fontWeight={'bold'}>{title}</Typography>
                                <Stack direction={'row'} gap={2}>
                                    <AuthorName variant="body1">{author}</AuthorName>
                                    <PublicationDate variant="body1">{extractUTCDate(publicationDate)}</PublicationDate>
                                </Stack>
                                <Stack direction={'row'} gap={2}>
                                    <Rating readOnly value={rating as unknown as number}></Rating>
                                    <Typography variant="body2">{rating} ({numberofVotes})</Typography>
                                </Stack>
                                <Stack direction={'row'} gap={3}>
                                    <Link style={{
                                         textDecoration :'none',
                                         color :'inherit',
                                         display: 'inline-flex',// or any other styles to match the buttons
                                         alignItems: 'center'
                                    }} target='_blank' href={content}><IconicButton icon={<StyledDownloadForOfflineIcon />} text={constants.BookDetails.DOWNLOAD_EN} /></Link>
                                    <IconicButton onClick={onClick} icon={<StyledLibraryAddIcon />} text={constants.BookDetails.ADD_TO_WISHLIST} />
                                    <IconicButton onClick={handleOpen} icon={<StyledReviewsIcon />} text={constants.BookDetails.SEE_REVIEWS} />
                                </Stack>
                                <AboutBookContainer >

                                    <Typography variant="h5">About Book</Typography>
                                    <Typography> {description}</Typography>

                                </AboutBookContainer>

                            </BookInfoContainer>
                        </Grid>
                        <ButtonGrid item xs={1}>
                            <CardButton />
                        </ButtonGrid>

                    </Grid>

                   
                </BookDetailsPaper>
                <TransitionsModal bookId={id} open={open} handleOpen={handleOpen} handleClose={handleClose} content={"comment"} id={id}/>

            </BookDetailsContainer>
            </BookInformationsContainer>
    )
}

export default BookDetails
