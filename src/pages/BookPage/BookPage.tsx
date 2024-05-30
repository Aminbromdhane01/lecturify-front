'use client'
import BookCard from "@/layouts/Card/Card";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { useSearchByTitleQuery } from "@/RTK/api/BookApi";
import { useEffect, useState } from "react";
import { calculateTimeElapsed } from "@/helpers/calculateDate";
import { useSelector } from 'react-redux'
import { RootState } from "@/RTK/store";
import NoBooksFound from "@/components/NoBooksFound/NoBooksFound";
import SkeletonGrid from "@/layouts/SkeletonGrid/SkeletonGrid";
import ControlledAlert from "@/components/Alert/ControllerdAlert";
import { clearMessage, setMessage } from "@/RTK/slices/AlertSlice";
import useAlert from "@/hooks/useAlert";
import { BookPagePaper } from "@/components/Book/Book.style";


const BookPage = () => {
    const [page, setPage] = useState(0);
    
          
    return (
        <Box display={'flex'} justifyContent={'center'} p={2}>
            <BookPagePaper elevation={2}  >
                <Stack alignItems={'center'}>
                    
                    

                </Stack>
            </BookPagePaper>
            
        </Box>


    )
}

export default BookPage
