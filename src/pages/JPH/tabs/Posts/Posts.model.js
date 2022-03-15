import React, { useEffect } from 'react'
import PostsView from './Posts.view'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../../../actions'

const PostsModel = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        if (!posts) dispatch(actions.JphActions.getPosts())
        if (!comments) dispatch(actions.JphActions.getComments())
        if (!users) dispatch(actions.JphActions.getComments())
    }, [])
    const { posts, users, comments } = useSelector((state) => state.jphReducer)
    return <PostsView posts={posts} users={users} comments={comments} />
}

export default PostsModel
