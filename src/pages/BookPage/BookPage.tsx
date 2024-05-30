'use client'
import { BookPagePaper } from "@/components/Book/Book.style";
import { Box } from "@mui/material";
import Stack from '@mui/material/Stack';
import { useState } from "react";


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
