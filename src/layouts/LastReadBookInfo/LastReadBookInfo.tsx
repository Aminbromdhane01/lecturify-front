import { palette } from '@/theme/palette'
import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

interface LastReadBookInfoProps {
    LeftContent: React.ReactElement
    RightContent: React.ReactElement
}

const LastReadBookInfo = ({ LeftContent, RightContent }: LastReadBookInfoProps) => {
    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} margin={3}>
            <Typography variant='h4' color={palette.whiteText} margin={1}>Recently Read Book</Typography>
            <Paper elevation={2} sx={{ width: '80%' }} >
                <Grid container >
                    <Grid item xs={3}>
                        {LeftContent}
                    </Grid>
                    <Grid item xs={9}>
                        {RightContent}
                    </Grid>

                </Grid>
            </Paper>
        </Box>
    )
}

export default LastReadBookInfo
