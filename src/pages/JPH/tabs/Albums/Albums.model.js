import React, { useEffect } from 'react'
import AlbumsView from './Albums.view'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../../../actions'


const AlbumsModel = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.JphActions.getAlbums())
    }, [])
    const { albums }  = useSelector(state => state.jphReducer)
    return (
        <AlbumsView albums={albums} />
    )
}

export default AlbumsModel