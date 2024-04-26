import BookCard from "@/layouts/Card/Card";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { useGetBooksQuery } from "@/RTK/api/BookApi";
import { useState } from "react";
import { calculateTimeElapsed } from "@/helpers/calculateDate";


const BookPage = () => {
    const [page, setPage] = useState(0);

    const { data: books, isLoading, refetch , isSuccess } = useGetBooksQuery({ page : page, itemPerPage :8, keyword :'key'});

    if (books?.data)
        {
            console.log(books.data);
            
        }
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(--value);
    
          };

          
    return (
        <Box display={'flex'} justifyContent={'center'} p={2}>
            <Paper elevation={2} sx={{ width: '90%', padding: 1 }} style={{ backgroundColor: '#EEEEEE' }} >
                <Stack alignItems={'center'}>

                    <Grid container justifyContent={'space-betwwen'} spacing={2} paddingLeft={3} >
                        { isSuccess && books?.data.map((book)=> (
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                        <BookCard title={book.title} genre={book.genre} date={calculateTimeElapsed(book.date)} />
                           </Grid>
                        ))}
                        {isLoading && 
                        <Typography>Loading</Typography>}
                        
                        
                    </Grid>

                    <Pagination count={books?.count && Math.ceil(books?.count/8)} variant="outlined" color="primary" sx={{ margin: 2 }} onChange={handleChange} />
               

                </Stack>
            </Paper>
        </Box>


    )
}

export default BookPage
