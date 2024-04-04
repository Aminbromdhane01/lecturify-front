'use client'
import { palette } from "@/theme/palette";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { styled } from '@mui/system';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

export const BookInfoCardContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',

}))
export const Title = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    fontSize: '25px'

}))
export const PublicationDate = styled(Typography)(({ theme }) => ({
    color: palette.greyText
}))

export const InformationsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

}))
export const StyledVisibilityOutlinedIcon = styled(VisibilityOutlinedIcon)(({ theme }) => ({
    color: palette.greyText

}))

export const StyledDivider = styled(Divider)(({ theme }) => ({
    paddingTop: '40px',
}))

export const InformationsStack = styled(Stack)(({ theme }) => ({
    gap: 1, marginTop: '15px'
}))
export const StyledDownloadForOfflineIcon = styled(DownloadForOfflineIcon)(({ theme }) => ({
    color: palette.primaryColor
}))
