import React from 'react'
import { AlbumCard, AlbumsContainer } from './Albums.styles'
import AlbumModel from './components/Album/Album.model'

const AlbumsView = ({ albums, users }) => {
    return (
        <AlbumsContainer>
            {albums?.map((album) => (
                <AlbumCard key={album.id}>
                    <span>User id: {album.userId}</span>
                    <span>{album.title}</span>
                </AlbumCard>
            ))}
        </AlbumsContainer>
    )
}

export default AlbumsView
