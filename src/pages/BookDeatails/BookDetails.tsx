'use client'
import BookImage from "@/components/BookImage/BookImage"
import CardButton from "@/components/CardButton/CardButton"
import { Box, Grid, Rating, Stack, Typography } from "@mui/material"
import IconicButton from "@/components/IconicButton/IconicButton";
import { AboutBookContainer, AuthorName, Background, BookDetailsContainer, BookDetailsPaper, BookInfoContainer, ButtonGrid, HomeLink, IconContainer, PublicationDate, StyledDownloadForOfflineIcon, StyledLibraryAddIcon, StyledReviewsIcon, Title } from "./BookDetails.style";
import IconTextTag from "@/components/IconTextTag/IconTextTag";
import { BookDetailsProps } from "./book-details.interface";
import { useState } from "react";
import TransitionsModal from "@/layouts/Modal/Modal";
import CommentSection from "@/features/comment/CommentSection";
import { extractUTCDate } from "@/helpers/dateToUTCDateString";

const BookDetails = ({ author, title, publicationDate, rating, numberofVotes, description }: BookDetailsProps) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Box p={1}>
                
                <Title variant="h6" align="center"> About Book</Title></Box>
            <BookDetailsContainer  >
                <BookDetailsPaper elevation={2}>
                    <Grid container direction={'column'}>
                        <Grid item xs={3}>
                            <BookImage />
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
                                    <IconicButton icon={<StyledDownloadForOfflineIcon />} text="Download" />
                                    <IconicButton icon={<StyledLibraryAddIcon />} text="Add to wishlist" />
                                    <IconicButton onClick={handleOpen} icon={<StyledReviewsIcon />} text="See Reviews" />
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
                <TransitionsModal open={open} handleOpen={handleOpen} handleClose={handleClose} content={<CommentSection/>}/>

            </BookDetailsContainer>
            </>
    )
}

export default BookDetails
