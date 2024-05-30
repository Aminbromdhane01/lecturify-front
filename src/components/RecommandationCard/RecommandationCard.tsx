import { palette } from '@/theme/palette'
import { Box, Button, Divider, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { ButtonContainer, StyledImage, SummaryTypography } from './RecommandationCard.style'
import { constants } from '@/utils/constants/constants'
interface RecommandationCardProps {
    title? :string
    summary? : string
    genre? : string
    onclick? : () => void
}

const RecommandationCard = ({title , summary , genre , onclick}:RecommandationCardProps) => {
  return (
    <Paper sx={{ m :1 , borderRadius : '10px' , backgroundColor :palette.whiteText}}>
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} width={'100%'}  overflow={'hidden'} flexDirection={'column'}>
        <Box position={'relative'} width={'100%'} minHeight={'150px'} >
            
        <StyledImage src={constants.RecommandationModule.RECOMMANDATION_CARD_URL}
        fill={true}
        alt='book recommandation'
        sizes='100'
          />
          </Box>
        <Typography variant='h6' fontWeight={'bold'}>{title}</Typography>
        <Typography variant='body1' fontWeight={'bold'}>{genre}</Typography>
        <SummaryTypography variant='body2'fontSize={'10px'} height={'150px'} overflow={'hidden'}
        >{summary}</SummaryTypography>
        <Divider component={'ul'} sx={{ width :'100%'}}></Divider>
        <ButtonContainer onClick={onclick}  >
            <Typography align='center' variant='body2' color={'white'} fontSize={'10px'} fontWeight={'bold'}>Read</Typography>
        </ButtonContainer>
    </Box>
    </Paper>
  )
}

export default RecommandationCard