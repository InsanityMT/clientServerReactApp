import React, { useEffect, useMemo } from 'react'
import { PostContainer, PostText, PostTittle } from './Post.styles'
import { findItemInCollectionByKeyValue } from '../../../../../../utils/array'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../../../../../actions'

const Post = () => {
    const dispatch = useDispatch()

    const { posts, users, comments } = useSelector(state => state.jphReducer)
    useEffect(()=> {
        if (!users) {
            dispatch(actions.JphActions.getUsers())
        }
        if (!posts) {
            dispatch(actions.JphActions.getPosts())
        }

        dispatch(actions.JphActions.getComments())
    }, [])
    const { id } = useParams()
    const post = useMemo(() => findItemInCollectionByKeyValue(posts, 'id', +id), [id, posts])
    console.log(post)
    console.log(posts)
    return (
        <PostContainer>
            {post?.userId}
            <PostTittle>
                {post?.title}
            </PostTittle>
            <PostText>
                {post?.body}
            </PostText>
        </PostContainer>
    )
}

export default Post