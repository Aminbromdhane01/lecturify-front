import {  useLazyGetCommentsByBookIdQuery } from '@/RTK/api/CommentApi';
import Comment from '@/components/Comment/Comment'
import { mockComment } from '@/mocks/mockData'
import Loading from '@/pages/Laoding/Loading';
import { constants } from '@/utils/constants/constants';
import { Box, CircularProgress } from '@mui/material';
import React, { useEffect } from 'react'
interface CommentSectionProps {
  bookId : number
}



const CommentSection = ({bookId } : CommentSectionProps) => {
  const [fetch,{ data : comments, error, isLoading }] = useLazyGetCommentsByBookIdQuery();
    useEffect(()=>{
        fetch(bookId)
    },[])
  
  return (
    <>
    {comments?.length == 0 && <Box>{constants.CommentsModule.NO_COMMENTS_MESSAGE}</Box>}
    {isLoading && <CircularProgress/>}
     {comments && comments.map(comment => (
        <Comment key={comment.id} comment={comment.text} date={comment.createdAt as unknown as string} />
      ))}
    </>
  )
}

export default CommentSection
