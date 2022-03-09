import React from 'react'
import { PostsContainer } from './Posts.styles'
import Post from './Components/Post/Post'

const PostsView = ({ posts }) => {
    console.log(posts)
    return (
        <PostsContainer>
            { posts?.map(post => <Post post={post} key={post.id} /> )}
        </PostsContainer>
    )
}

export default PostsView