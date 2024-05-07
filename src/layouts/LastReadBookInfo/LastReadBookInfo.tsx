import { palette } from '@/theme/palette'
import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { LastInfoPaper } from './LastReadBookInfo.style'

interface InfoCardProps {
    LeftContent: React.ReactElement
    RightContent: React.ReactElement
    title? : string
    insideCardTitle? : string
}

const InfoCard = ({ LeftContent, RightContent , title , insideCardTitle }: InfoCardProps) => {


    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} margin={3} >
            <Typography variant='h4'fontWeight={'bold'} color={palette.whiteText} margin={1}>{title}</Typography>
            <LastInfoPaper elevation={2} >
                <Box m={1} bgcolor={'white'} borderRadius={'10px'}>
            <Typography variant='h4'fontWeight={'bold'} color={palette.primaryColor} margin={1} align='center'>{insideCardTitle}</Typography>

                <Grid container >
                    <Grid item xs={3}>
                        {LeftContent}
                    </Grid>
                    <Grid item xs={9}>
                        {RightContent}
                    </Grid>

                </Grid>
                </Box>
            </LastInfoPaper>
        </Box>
    )
}

export default InfoCard
