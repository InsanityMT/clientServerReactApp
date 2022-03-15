import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 8px 8px;
    border-bottom: 1px solid #808080ff;
    :last-child {
        border: none;
    }
    div > span {
        font-size: 26px;
        padding: 5px;
    }
`

const UserLink = styled(NavLink)`
    font-size: 26px;
    padding: 5px;
    text-decoration: none;
    cursor: pointer;
    color: #808080ff;
`

const MainInformation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const AdditionalInformation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 5px 15px 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Address = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 5px 15px 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
`

export {
    UserContainer,
    MainInformation,
    AdditionalInformation,
    Address,
    UserLink,
}
