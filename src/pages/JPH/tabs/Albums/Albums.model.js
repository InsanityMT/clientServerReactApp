import React, { useEffect } from 'react'
import AlbumsView from './Albums.view'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../../../actions'


const AlbumsModel = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.JphActions.getAlbums())
        dispatch(actions.JphActions.getPhotos())
    }, [])
    const { albums, photos, users }  = useSelector(state => state.jphReducer)
    return (
        <AlbumsView albums={albums} photos={photos} users={users} />
    )
}

export default AlbumsModel