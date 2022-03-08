import React, { useEffect } from 'react'
import PostsView from './Posts.view'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../../../actions'
import jphReducer from '../../../../reducers/pages/json-place-holder'

const PostsModel = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.JphActions.getPosts())
    }, [])
    const { posts } = useSelector(state => state.jphReducer)
    return (
        <PostsView posts={posts} />
    )
}

export default PostsModel