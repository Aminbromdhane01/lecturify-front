import { palette } from '@/theme/palette'
import { Box, Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
const MAX_CHARACTERS =200;
interface commentProps
{   image? : string
    username?: string
    date?: string
    comment : string
}
const Comment = ({comment , image , username , date} : commentProps) => {
    const [expanded, setExpanded] = React.useState(false);

      const truncatedComment = comment.substring(0, MAX_CHARACTERS);
      const isTruncated = comment.length > MAX_CHARACTERS;

     const toggleExpand = () => {
      setExpanded(!expanded);
  };
  return (
    <Box sx={{backgroundColor : 'white' , minHeight : '50px'}}>
        <Grid container pr={1} justifyContent={'center'} alignItems={'center'}>
          <Grid item xs ={1}><Image src={image as string} height={40} width={40} alt='photo comment' style={{borderRadius : '50px'}} /></Grid>
          <Grid item xs={9}><Typography variant='body1' fontWeight={'bold'} color={palette.skyBlueText}>{username}</Typography></Grid>
          <Grid item xs={2}><Typography align='right' variant='body2' fontWeight={'bold'} color={palette.greyText}>{date}</Typography></Grid>
        </Grid>
        <Grid container >
           <Grid item xs={1}></Grid>
           <Grid item xs={11}>
            <Box>
            <Typography variant='body2'>
              {expanded ? comment : truncatedComment}
              {isTruncated && (
                <Button sx={{fontSize : '12px'}} onClick={toggleExpand}>
                  {expanded ? 'Less' : 'More'}
                </Button>
              )}
            </Typography>
            </Box>
           </Grid>
        </Grid>
    </Box>
  )
}

export default Comment