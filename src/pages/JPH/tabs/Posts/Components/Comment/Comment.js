import React from 'react'
import { CommentBody, CommentContainer, CommentTittle } from './Comment.styles'

const Comment = ({ comment }) => {
    const { name, body } = comment
    console.log(comment)
    return (
        <CommentContainer>
            <CommentTittle>{name}</CommentTittle>
            <CommentBody>{body}</CommentBody>
        </CommentContainer>
    )
}

export default Comment
