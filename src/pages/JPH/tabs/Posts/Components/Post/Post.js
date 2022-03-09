import React from 'react'
import { PostContainer, PostText, PostTittle } from './Post.styles'

const Post = ({ post }) => {
    const { body, userId, title, id } = post
    return (
        <PostContainer>
            {userId}
            <PostTittle>
                {title}
            </PostTittle>
            <PostText>
                {body}
            </PostText>
        </PostContainer>
    )
}

export default Post