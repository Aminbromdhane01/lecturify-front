import Comment from '@/components/Comment/Comment'
import { mockComment } from '@/mocks/mockData'
import React from 'react'

const CommentSection = () => {
  return (
    <>
    <Comment comment={mockComment}/>
    </>
  )
}

export default CommentSection
