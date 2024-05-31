'use client'
import { useAddToWishlistMutation } from '@/RTK/api/BookApi';
import { NonDecoratedLink } from '@/components/IconicButton/IconButton.style';
import ControlledAlert from '@/components/ControlledAlert/ControllerdAlert';
import ControlledRating from '@/components/home/book/rating/ControlledRating';
import { decodeAccesToken } from '@/helpers/decodedAceesToken';
import useAlert from '@/hooks/useAlert';
import Favorite from '@mui/icons-material/Favorite';
import AspectRatio from '@mui/joy/AspectRatio';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { useState } from "react";
import { CardContainer, CardPaper, StyledIconButton } from './Card.style';

interface BookCardProps {
    title: string
    genre: string
    date: string
    id : number
}
export default function BookCard({ title, genre, date , id}: BookCardProps) {
    const [AddToWishlistMutation, { data: response, isLoading, isError, isSuccess, error }] = useAddToWishlistMutation();
    const { open: isOpen, alertMessage: errorMessage, handleCloseAlert: handleCloseEroorAlert } = useAlert(isError, error);
    const { open, alertMessage, handleCloseAlert } = useAlert(isSuccess);
    
   
    

    
    const onClick = () => {
        AddToWishlistMutation({userId : decodeAccesToken().sub , bookId : id})      
    }
    
    
    

    const [ratingValue, setRatingValue] = useState(2);
    const router = useRouter()
    const navigateToBookDetails = () => {
        router.push('/book/1')
    }

    const handleRatingChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
        setRatingValue(newValue || 0);
    };
    return (
        <CardPaper>
            <CardContainer variant="outlined">
                <CardOverflow >
                    <AspectRatio ratio={1}  >
                        <Image

                            src={'/bookCover.png'}
                            alt='ImAGE'
                            width={300}
                            height={300}

                        />
                    </AspectRatio>
                    <StyledIconButton
                        aria-label="Like minimal photography"
                        size="md"
                        variant="solid"
                        color="danger"
                        onClick={onClick}
                    >
                        <Favorite />
                    </StyledIconButton>
                </CardOverflow>
                <CardContent>
                    <Typography level="title-md">
                        <NonDecoratedLink href={'/book/'+id}  >
                            {title}
                        </NonDecoratedLink>
                    </Typography>
                    <Typography level="body-sm">
                        {genre}
                    </Typography>
                </CardContent>
                <CardOverflow variant="soft">
                    <Divider inset="context" />
                    <CardContent orientation="horizontal">
                        <ControlledRating value={ratingValue} onChange={handleRatingChange} />
                        <Divider orientation="vertical" />
                        <Typography level="body-xs">{date}</Typography>
                    </CardContent>
                </CardOverflow>
                {open && <ControlledAlert open={open} handleClose={handleCloseAlert} duration={6000} content={'The Book is Added Succusfully to your wishlist'} severity="success" />}
                {isOpen && <ControlledAlert open={isOpen} handleClose={handleCloseEroorAlert} duration={3000} content={errorMessage} severity="error" />}
            </CardContainer>
        </CardPaper>
    );
}