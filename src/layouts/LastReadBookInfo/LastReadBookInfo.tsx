import { palette } from '@/theme/palette'
import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { LastInfoPaper } from './LastReadBookInfo.style'
import ProfileImage from '@/components/PofileImage/ProfileImage'
import BookImage from '@/components/BookImage/BookImage'
import ProfileInfo from '@/components/ProfileInfo/ProfileInfo'
import BookInfo from '@/components/BookInfo/BookInfo'

interface InfoCardProps {
    title? : string
    insideCardTitle? : string
    type : 'profile_info' | 'book_info'
}

const InfoCard = ({ title , insideCardTitle , type }: InfoCardProps) => {
    const renderLeftContent = () => {
        switch (type) {
            case 'profile_info':
                return <ProfileImage/>;
            case 'book_info':
                return <BookImage />;
            default:
                return null;
        }
    }
    const renderRightContent = () => {
        switch (type) {
            case 'profile_info':
                return <ProfileInfo/>;
            case 'book_info':
                return <BookInfo />;
            default:
                return null;
        }
    }


    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} margin={3} >
            <Typography variant='h4'fontWeight={'bold'} color={palette.whiteText} margin={1}>{title}</Typography>
            <LastInfoPaper elevation={2} >
                <Box m={1} bgcolor={'white'} borderRadius={'10px'}>
            <Typography variant='h4'fontWeight={'bold'} color={palette.primaryColor} margin={1} align='center'>{insideCardTitle}</Typography>

                <Grid container >
                    <Grid item xs={3}>
                        {renderLeftContent()}
                    </Grid>
                    <Grid item xs={9}>
                        {renderRightContent()}
                    </Grid>

                </Grid>
                </Box>
            </LastInfoPaper>
        </Box>
    )
}

export default InfoCard
