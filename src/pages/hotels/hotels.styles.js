import styled from 'styled-components'

const HotelStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Cards = styled.div`
    width: 80%;
    margin-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    height: 800px;
    overflow-y: scroll;
`

export {
    HotelStyles,
    Cards
}
