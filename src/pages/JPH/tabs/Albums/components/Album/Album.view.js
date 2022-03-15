import React from 'react'
import { AlbumContainer, AlbumContent, AlbumTitle } from './Almub.styles'
import { UserLink } from '../../../../../../components/User/User.styles'
import Icon from '../../../../../../components/Icon/Icon'

const AlbumView = ({ user, album, photos, id }) => {
    return (
        <AlbumContainer>
            <AlbumTitle>
                <UserLink to={`/jph/users/${id}`}>{user?.name}</UserLink>
                <span>Album name: {album?.title}</span>
            </AlbumTitle>
            <AlbumContent>
                {photos.map((photo) => (
                    <Icon url={photo?.url} width={600} height={600} />
                ))}
            </AlbumContent>
        </AlbumContainer>
    )
}

export default AlbumView
