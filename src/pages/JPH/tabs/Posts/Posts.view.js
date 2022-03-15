import React, { useMemo } from 'react'
import { PostsContainer } from './Posts.styles'
import { PostContainer, PostText, PostTittle } from './Posts.styles'
import { findItemInCollectionByKeyValue } from '../../../../utils/array'
import { UserLink } from '../../../../components/User/User.styles'

const PostsView = ({ posts, users }) => {
    const PostCard = ({ post }) => {
        const { body, userId, title, id } = post
        const user = useMemo(
            () => findItemInCollectionByKeyValue(users, 'id', userId),
            [users]
        )

        return (
            <PostContainer>
                <UserLink to={`/jph/users/${user.id}`}>{user?.name}</UserLink>
                <PostTittle to={`/jph/posts/${id}`}>{title}</PostTittle>
                <PostText>{body}</PostText>
            </PostContainer>
        )
    }

    return (
        <PostsContainer>
            {posts?.map((post) => (
                <PostCard post={post} key={post.id} />
            ))}
        </PostsContainer>
    )
}

export default PostsView
