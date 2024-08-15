import DataGrid from "@/layouts/DataGrid/DataGrid";
import { GridColDef } from "@mui/x-data-grid";
import { isValidElement, useEffect, useState } from "react";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Box, Grid, Rating, Stack } from "@mui/material";
import { mockBooks } from "@/mocks/mockData";
import { BookInformationsContainer } from "@/components/BookPage/BookPage.style";
import { useLazyGetUserWishlistQuery } from "@/RTK/api/BookApi";
import { BookPagePaper } from "@/components/Book/Book.style";
import { calculateTimeElapsed } from "@/helpers/calculateDate";
import NoBooksFound from "@/components/NoBooksFound/NoBooksFound";
import MainCard from "@/components/MainCard/MainCard";
import SkeletonGrid from "@/layouts/SkeletonGrid/SkeletonGrid";
import { decodeAccesToken } from "@/helpers/decodedAceesToken";


const WishListDataTable: React.FC = () => {
  const [trigger, { data: books, isLoading, isSuccess }] = useLazyGetUserWishlistQuery();
  console.log(books);

useEffect(() => {
trigger({userId : decodeAccesToken().sub});
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

</Box>)
  };
  
  export default WishListDataTable;