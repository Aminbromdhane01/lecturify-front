'use client'
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';
import ControlledRating from '@/components/home/book/rating/ControlledRating';
import { useState } from "react";
import Image from 'next/image'
import { CardContainer, CardPaper, StyledIconButton } from './Card.style';
import { useRouter } from 'next/navigation';

interface BookCardProps {
    title: string
    genre: string
    date: string
}
export default function BookCard({ title, genre, date }: BookCardProps) {
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
            <CardContainer variant="outlined" onClick={navigateToBookDetails}>
                <CardOverflow >
                    <AspectRatio ratio={1} >
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
                    >
                        <Favorite />
                    </StyledIconButton>
                </CardOverflow>
                <CardContent>
                    <Typography level="title-md">
                        <Link href="#multiple-actions" overlay underline="none">
                            {title}
                        </Link>
                    </Typography>
                    <Typography level="body-sm">
                        <Link href="#multiple-actions">{genre}</Link>
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
            </CardContainer>
        </CardPaper>
    );
}