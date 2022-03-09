import React from 'react'
import { AlbumCard, AlbumsContainer } from './Albums.styles'
import Album from './components/Album/Album'

const AlbumsView = ({ albums }) => {
    return (
        <AlbumsContainer>
            {
                albums?.map(album =>
                    <AlbumCard key={album.id}>
                        <span>User id: {album.userId}</span>
                        <span>{album.title}</span>
                    </AlbumCard>
            )}
        </AlbumsContainer>
    )
}

export default AlbumsView