import { Box, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import Divider from '@mui/material/Divider';
import { palette } from '@/theme/palette';
import Link from 'next/link';


const BookInfo = () => {
    return (
        <Box margin={1} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'}>
            <Typography variant='body1' fontWeight={'bold'} fontSize={'25px'}  >Title</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod, sequi perferendis, ipsam et id deserunt vero, vel reprehenderit animi reiciendis obcaecati laboriosam fugit velit vitae voluptates eveniet veritatis maxime?
                Facere accusamus aliquam labore sint ab nihil aperiam, ipsum voluptatum vitae quam voluptatem quidem nobis? Illum, animi! Iste reiciendis, animi recusandae at deserunt placeat repudiandae magni, voluptatem amet doloribus ad.
                Ratione, quia! Nulla incidunt ex corrupti, nisi a quaerat eligendi obcaecati? Nesciunt soluta saepe expedita praesentium molestias sed dolorem aspernatur qui iusto eos vel voluptatibus, illum autem mollitia eligendi vero!

            </Typography>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                <Stack direction={'row'} gap={1} marginTop={1}>
                    <VisibilityOutlinedIcon />
                    <Typography>12/15/2021 at 4:30 pm</Typography>

                </Stack>
                <Stack direction={'row'} gap={1} marginTop={1} marginRight={1}>
                    <BookmarksOutlinedIcon />
                    <Typography>Page N 45</Typography>

                </Stack>

            </Box>
            <Divider variant="middle" sx={{ paddingTop: '40px' }} />
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                <Stack direction={'column'} gap={1} marginTop={1}>
                    <Typography variant='body1' fontWeight={'bold'} fontSize={'15px'} color={palette.primaryColor}  >Author Name</Typography>
                    <Rating name="read-only" value={2} readOnly />


                </Stack>
                <Stack direction={'column'} gap={1} marginTop={1} marginRight={1} alignItems={'center'}>
                    <DownloadForOfflineIcon sx={{ color: palette.primaryColor }} />
                    <Link href={"#"} style={{ textDecoration: 'none' }}><Typography>Download</Typography></Link>

                </Stack>

            </Box>

        </Box>
    )
}

export default BookInfo
