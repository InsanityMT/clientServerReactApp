import React from 'react'
import {
    CommentsContainer,
    PostContainer,
    PostText,
    PostTittle,
} from './Post.styles'
import Comment from '../Comment'
import { UserLink } from '../../../../../../components/User/User.styles'

const PostView = ({ post, user, comments }) => {
    return (
        <>
            <PostContainer>
                <UserLink to={`/jph/users/${user?.id}`}>{user?.name}</UserLink>
                <PostTittle to="" hover="none">
                    {post?.title}
                </PostTittle>
                <PostText>{post?.body}</PostText>
                <CommentsContainer>
                    <span>Comments:</span>
                    {comments?.map((comment) => (
                        <Comment comment={comment} />
                    ))}
                </CommentsContainer>
            </PostContainer>
        </>
    )
}

export default PostView
