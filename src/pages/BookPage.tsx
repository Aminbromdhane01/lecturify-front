import BookCard from "@/layouts/Card/Card";
import { Grid } from "@mui/material";
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';


const BookPage = () => {
    return (
        <Stack alignItems={'center'}>
            <Grid container justifyContent={'space-betwwen'} spacing={2} paddingLeft={3} >
                <Grid item xs={12} sm={6} md={4} lg={2.3}>
                    <BookCard title='Title' genre='Genre' date='1 Hour Ago' />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2.3}>
                    <BookCard title='Title' genre='Genre' date='1 Hour Ago' />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2.3}>
                    <BookCard title='Title' genre='Genre' date='1 Hour Ago' />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2.3}>
                    <BookCard title='Title' genre='Genre' date='1 Hour Ago' />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2.3}>
                    <BookCard title='Title' genre='Genre' date='1 Hour Ago' />
                </Grid>
            </Grid>
            <Pagination count={10} variant="outlined" color="primary" />
        </Stack>

    )
}

export default BookPage
