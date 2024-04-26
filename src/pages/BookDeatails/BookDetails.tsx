import BookImage from "@/components/BookImage/BookImage"
import CardButton from "@/components/CardButton/CardButton"
import { Box, Grid, Rating, Stack, Typography } from "@mui/material"
import IconicButton from "@/components/IconicButton/IconicButton";
import { AboutBookContainer, AuthorName, Background, BookDetailsContainer, BookDetailsPaper, BookInfoContainer, ButtonGrid, HomeLink, IconContainer, PublicationDate, StyledDownloadForOfflineIcon, StyledLibraryAddIcon, StyledReviewsIcon, Title } from "./BookDetails.style";
import IconTextTag from "@/components/IconTextTag/IconTextTag";
import { BookDetailsProps } from "./book-details.interface";

const BookDetails = ({ author, title, publicationDate, rating, numberofVotes, description }: BookDetailsProps) => {
    return (
        <Background>
            <Box p={1}>
                <HomeLink href={'/home'}>  <IconContainer><IconTextTag /></IconContainer></HomeLink>
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
                                    <PublicationDate variant="body1">{publicationDate?.toDateString()}</PublicationDate>
                                </Stack>
                                <Stack direction={'row'} gap={2}>
                                    <Rating readOnly value={2}></Rating>
                                    <Typography variant="body2">{rating} ({numberofVotes})</Typography>
                                </Stack>
                                <Stack direction={'row'} gap={3}>
                                    <IconicButton icon={<StyledDownloadForOfflineIcon />} text="Download" />
                                    <IconicButton icon={<StyledLibraryAddIcon />} text="Add to wishlist" />
                                    <IconicButton icon={<StyledReviewsIcon />} text="See Reviews" />
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
            </BookDetailsContainer>
        </Background>
    )
}

export default BookDetails
