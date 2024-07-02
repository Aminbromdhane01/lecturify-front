import { Box, Grid, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import { BookPagePaper } from '../Book/Book.style'
import NoBooksFound from '../NoBooksFound/NoBooksFound'
import MainCard from '../MainCard/MainCard'
import { calculateTimeElapsed } from '@/helpers/calculateDate'
import SkeletonGrid from '@/layouts/SkeletonGrid/SkeletonGrid'
import { useLazyGetRecommendedBooksQuery } from '@/RTK/api/BookApi'

const RecommandedBooks = () => {
    const [trigger, { data: books, isLoading, isSuccess }] = useLazyGetRecommendedBooksQuery();
        console.log(books);
        
  useEffect(() => {
    trigger();
  }, []);
  return (
    <Box display={'flex'} justifyContent={'center'} p={2}>
    <BookPagePaper elevation={2}  >
        <Stack alignItems={'center'}>
            {<Grid container justifyContent={'space-betwwen'} spacing={2} paddingLeft={3} alignItems={'center'}>
                {books?.length == 0 && <NoBooksFound/>}
                {isSuccess && books?.map((book) => (
             <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
              <MainCard
               title={book.title as string}
               author={book.genre as string}
               time={calculateTimeElapsed(book.date)}
               id={book.id as unknown as number}
               description={book.description as string}
               image={book.image as string}
            />
           </Grid>
                     ))}
        {isLoading && 
        <SkeletonGrid/>}      
                </Grid>}
                </Stack>
    </BookPagePaper>
    
</Box>
  )
}

export default RecommandedBooks