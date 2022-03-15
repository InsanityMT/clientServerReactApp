import React, { useEffect, useMemo } from 'react'
import {
    filterCollectionByKeyValue,
    findItemInCollectionByKeyValue,
} from '../../../../../../utils/array'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../../../../../actions'
import PostView from './Post.view'

const PostModel = () => {
    const dispatch = useDispatch()
    const {
        posts,
        users,
        comments: _comments,
    } = useSelector((state) => state.jphReducer)
    const { id } = useParams()
    const post = useMemo(
        () => findItemInCollectionByKeyValue(posts, 'id', +id),
        [id, posts]
    )
    const comments = useMemo(
        () => filterCollectionByKeyValue(_comments, 'postId', +id),
        [id, _comments]
    )
    const user = useMemo(
        () => findItemInCollectionByKeyValue(users, 'id', post?.userId),
        [post, users]
    )

    useEffect(() => {
        if (!users) dispatch(actions.JphActions.getUsers())
        if (!posts) dispatch(actions.JphActions.getPosts())
        if (!_comments) dispatch(actions.JphActions.getComments())
    }, [])

    return <PostView post={post} user={user} comments={comments} />
}

export default PostModel
