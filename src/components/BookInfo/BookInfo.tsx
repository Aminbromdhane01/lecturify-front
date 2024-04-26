import { Rating, Typography } from '@mui/material'
import React from 'react'
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import { palette } from '@/theme/palette';
import { BookInfoCardContainer, InformationsContainer, InformationsStack, PublicationDate, StyledDivider, StyledDownloadForOfflineIcon, StyledVisibilityOutlinedIcon, Title } from './BookInfo.style';
import { NonDecoratedLink } from '../IconicButton/IconButton.style';


const BookInfo = () => {
    return (
        <BookInfoCardContainer>
            <Title >Title</Title>
            <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod, sequi perferendis, ipsam et id deserunt vero, vel reprehenderit animi reiciendis obcaecati laboriosam fugit velit vitae voluptates eveniet veritatis maxime?
                Facere accusamus aliquam labore sint ab nihil aperiam, ipsum voluptatum vitae quam voluptatem quidem nobis? Illum, animi! Iste reiciendis, animi recusandae at deserunt placeat repudiandae magni, voluptatem amet doloribus ad.
                Ratione, quia! Nulla incidunt ex corrupti, nisi a quaerat eligendi obcaecati? Nesciunt soluta saepe expedita praesentium molestias sed dolorem aspernatur qui iusto eos vel voluptatibus, illum autem mollitia eligendi vero!

            </Typography>
            <InformationsContainer>
                <InformationsStack direction={'row'}>
                    <StyledVisibilityOutlinedIcon />
                    <PublicationDate>12/15/2021 at 4:30 pm</PublicationDate>

                </InformationsStack>
                <InformationsStack direction={'row'} marginRight={1} >
                    <BookmarksOutlinedIcon />
                    <Typography>Page N 45</Typography>

                </InformationsStack>

            </InformationsContainer>
            <StyledDivider variant="middle" />
            <InformationsContainer>
                <InformationsStack direction={'column'} >
                    <Typography variant='body1' fontWeight={'bold'} fontSize={'15px'} color={palette.primaryColor}  >Author Name</Typography>
                    <Rating name="read-only" value={2} readOnly />


                </InformationsStack>
                <InformationsStack direction={'column'} marginRight={1} alignItems={'center'}>
                    <StyledDownloadForOfflineIcon />
                    <NonDecoratedLink href={"#"} ><Typography>Download</Typography></NonDecoratedLink>

                </InformationsStack>

            </InformationsContainer>

        </BookInfoCardContainer>
    )
}

export default BookInfo
