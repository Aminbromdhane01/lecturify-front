import BookCard from "@/layouts/Card/Card";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { useGetBooksQuery, useSearchByTitleQuery } from "@/RTK/api/BookApi";
import { useState } from "react";
import { calculateTimeElapsed } from "@/helpers/calculateDate";
import { useSelector } from "react-redux";
import { RootState } from "@/RTK/store";
import NoBooksFound from "@/components/NoBooksFound/NoBooksFound";
import { BookPagePaper } from "./BookPage.style";
import SkeletonGrid from "@/layouts/SkeletonGrid/SkeletonGrid";


const BookPage = () => {
    const [page, setPage] = useState(0);
    const keyword = useSelector((state: RootState) => state.search.keyword); 
    const { data: books, isLoading, refetch , isSuccess } = useSearchByTitleQuery({ page : page, itemPerPage :8, keyword :keyword as string});
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(--value);
     };
      

          
    return (
        <Box display={'flex'} justifyContent={'center'} p={2}>
            <BookPagePaper elevation={2}  >
                <Stack alignItems={'center'}>
             
                    <Grid container justifyContent={'space-betwwen'} spacing={2} paddingLeft={3} alignItems={'center'}>
                        {books?.count == 0 && <NoBooksFound/>}
                        { isSuccess && books?.data.map((book)=> (
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                        <BookCard title={book.title as string} genre={book.genre as string} date={calculateTimeElapsed(book.date)} />
                           </Grid>
                        ))}
                        {isLoading && 
                        <SkeletonGrid/>}
                        
                        
                    </Grid>

                    <Pagination count={books?.count && Math.ceil(books?.count/8)} variant="outlined" color="primary" sx={{ margin: 2 }} onChange={handleChange} />
               

                </Stack>
            </BookPagePaper>
        </Box>


    )
}

export default BookPage
