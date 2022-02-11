import styled from 'styled-components'

const TravelAdvisorFactoryStyles = styled.div`
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
    height: 700px;
    overflow-y: scroll;
`

export {
    TravelAdvisorFactoryStyles,
    Cards
}
