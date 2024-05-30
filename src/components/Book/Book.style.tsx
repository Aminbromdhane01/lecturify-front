'use client'
import { styled } from '@mui/system';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import ReviewsIcon from '@mui/icons-material/Reviews';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { palette } from '@/theme/palette';
import { Box, Grid, Paper, Typography, keyframes } from '@mui/material';
import Link from 'next/link';


export const StyledDownloadForOfflineIcon = styled(DownloadForOfflineIcon)(({ theme }) => ({
    position: 'static',
    color: palette.primaryColor

}))
export const StyledReviewsIcon = styled(ReviewsIcon)(({ theme }) => ({
    position: 'static',
    color: palette.primaryColor

}))
export const StyledLibraryAddIcon = styled(LibraryAddIcon)(({ theme }) => ({
    position: 'static',
    color: palette.primaryColor

}))
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const BookDetailsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'opacity 0.5s ease-in-out',
    animation: `${fadeIn} 0.5s ease-out`

}))
export const BookDetailsPaper = styled(Paper)(({ theme }) => ({
    minWidth: '420px',
    width: '45%'

}))
export const BookInfoContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 4,

}))
export const AuthorName = styled(Typography)(({ theme }) => ({
    color: palette.primaryColor
}))
export const PublicationDate = styled(Typography)(({ theme }) => ({
    color: palette.greyText
}))
export const AboutBookContainer = styled(Box)(({ theme }) => ({
    minWidth: '90%',
    maxWidth: '95%'
}))
export const ButtonGrid = styled(Grid)(({ theme }) => ({
    position: 'sticky',
    bottom: '0'
}))

export const Background = styled(Box)(({ theme }) => ({
    position: 'relative',
    zIndex: 1,
    padding: 0,
    color: 'white',

    '&::before': {
        content: '""',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '80vh',
        background: 'linear-gradient(135deg, #1976D2 0%, #1278de 100%)',
        clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',
        zIndex: -1,
    },
}))
export const IconContainer = styled(Box)(({ theme }) => ({
    '&:hover': {
        cursor: 'pointer',
    }
}))
export const Title = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    color: palette.whiteText,
    fontSize: '30px',

}))
export const HomeLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: palette.whiteText,


}))
export const BookPagePaper = styled(Paper)(({ theme }) => ({
    width : '90%',
    padding : '10px',
    backgroundColor : palette.lightGrey
}));
