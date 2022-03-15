import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import actions from './../../../../../../actions'
import {
    filterCollectionByKeyValue,
    findItemInCollectionByKeyValue,
} from '../../../../../../utils/array'
import AlbumView from './Album.view'

const AlbumModel = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const {
        users,
        photos: _photos,
        albums,
    } = useSelector((state) => state.jphReducer)
    useEffect(() => {
        if (!users) dispatch(actions.JphActions.getUsers())
        if (!_photos) dispatch(actions.JphActions.getPhotos())
        if (!albums) dispatch(actions.JphActions.getAlbums())
    }, [])
    const album = useMemo(
        () => findItemInCollectionByKeyValue(albums, 'id', +id),
        [id, albums]
    )
    const user = useMemo(
        () => findItemInCollectionByKeyValue(users, 'id', album?.userId),
        [album, users]
    )
    const photos = useMemo(
        () => filterCollectionByKeyValue(_photos, 'albumId', +album?.id),
        [album, _photos]
    )
    return <AlbumView album={album} user={user} photos={photos} id={id} />
}

export default AlbumModel
