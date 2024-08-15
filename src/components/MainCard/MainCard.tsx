
import { Box, Divider, Grid, Paper, Rating, Stack, Typography, alpha } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import StarsIcon from '@mui/icons-material/Stars';
import useAlert from '@/hooks/useAlert';
import { decodeAccesToken } from '@/helpers/decodedAceesToken';
import { NonDecoratedLink } from '../IconicButton/IconButton.style';
import { useAddToWishlistMutation } from '@/RTK/api/BookApi';
import { CardContainer, CardImage, CardPaper, DescriptionGrid, InformationsGridContainer } from './MainCard.style';
import ControlledAlert from '../ControlledAlert/ControllerdAlert';
interface MainCardProps {
    title : string;
    author : string;
    time : string;
    id : number;
    description : string
    image : string
}

const MainCard = ({title , author , time , id , description , image} :MainCardProps) => {
    const [AddToWishlistMutation, { data: response, isLoading, isError, isSuccess, error }] = useAddToWishlistMutation();
    const { open: isOpen, alertMessage: errorMessage, handleCloseAlert: handleCloseEroorAlert } = useAlert(isError, error);
    const { open, alertMessage, handleCloseAlert } = useAlert(isSuccess);
    const onClick = () => {
        AddToWishlistMutation({userId : decodeAccesToken().sub , bookId : id})      
    }
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };   
    
  return (
    <CardContainer elevation={2}>
    <Box display={'flex'}  flexDirection={'column'} borderRadius={'10px'}>
        
        <Box position={'relative'}    >
            <Box position={'relative'} height={'400px'}>
                <CardImage
                src={image}
                alt='hhh'
                fill={true}
                />
            </Box>
            <Box position='absolute' bottom={0} width="100%">
           <CardPaper elevation={0} >
           <Grid container  alignItems={'center'} >
                <Grid item xs={10}>
                <Stack direction={'column'} m={1}  >
                <Typography variant='body1' fontWeight={'bold'}>
                    <NonDecoratedLink href={'/book/'+id}>
                    {title}
                    </NonDecoratedLink>
                    </Typography>
                <Typography variant='body2' color={'white'}>{author}</Typography>
                </Stack>
                </Grid>
                <Grid item xs={2}  >
                    <StarsIcon fontSize='large' sx={{color :'red'}}/>
                </Grid>
            </Grid>
            <Divider component={'ul'}/>
            <InformationsGridContainer container p={1}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
             height={isHovered ? '400px' : 'auto'}
            >
                <Grid item xs ={8}><Typography align='right' color={'whitesmoke'}>{time}</Typography></Grid>
                {isHovered && (
                <DescriptionGrid item xs={12}>
                    <Typography color={'white'}>
                           {description}
                    </Typography>
                </DescriptionGrid>
                 )}
            </InformationsGridContainer>
           </CardPaper>
            </Box>
        </Box>
        {open && <ControlledAlert open={open} handleClose={handleCloseAlert} duration={6000} content={'The Book is Added Succusfully to your wishlist'} severity="success" />}
        {isOpen && <ControlledAlert open={isOpen} handleClose={handleCloseEroorAlert} duration={3000} content={errorMessage} severity="error" />}
    </Box>
    </CardContainer>
  )
}

export default MainCard