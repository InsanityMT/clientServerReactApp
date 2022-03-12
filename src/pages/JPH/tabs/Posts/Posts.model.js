import React, { useEffect } from 'react'
import PostsView from './Posts.view'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../../../actions'

const PostsModel = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.JphActions.getPosts())
        dispatch(actions.JphActions.getComments())
    }, [])
    const { posts, users, comments } = useSelector(state => state.jphReducer)
    return (
        <PostsView posts={posts} users={users} comments={comments} />
    )
}

export default PostsModel