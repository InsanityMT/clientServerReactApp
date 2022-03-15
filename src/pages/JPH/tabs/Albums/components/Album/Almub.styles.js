import styled from 'styled-components'

const AlbumContainer = styled.div`
    margin-left: 115px;
    width: 75%;
    border: 1px solid #808080ff;
    border-radius: 15px;
    padding: 15px;
`

const AlbumTitle = styled.div`
    width: 100%;
`

const AlbumContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 20px;
    justify-content: space-around;
    flex-wrap: wrap;
`

export { AlbumContainer, AlbumTitle, AlbumContent }
