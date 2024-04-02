import BookCard from "@/layouts/Card/Card";
import { Box, Grid, Paper } from "@mui/material";
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';


const BookPage = () => {
    return (
        <Box display={'flex'} justifyContent={'center'} p={2}>
            <Paper elevation={2} sx={{ width: '90%', padding: 1 }} style={{ backgroundColor: '#EEEEEE' }} >
                <Stack alignItems={'center'}>

                    <Grid container justifyContent={'space-betwwen'} spacing={2} paddingLeft={3} >
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <BookCard title='Title' genre='Genre' date='1 Hour Ago' />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <BookCard title='Title' genre='Genre' date='1 Hour Ago' />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <BookCard title='Title' genre='Genre' date='1 Hour Ago' />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <BookCard title='Title' genre='Genre' date='1 Hour Ago' />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <BookCard title='Title' genre='Genre' date='1 Hour Ago' />
                        </Grid>
                    </Grid>

                    <Pagination count={10} variant="outlined" color="primary" sx={{ margin: 2 }} />

                </Stack>
            </Paper>
        </Box>


    )
}

export default BookPage
