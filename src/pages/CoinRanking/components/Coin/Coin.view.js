import React from 'react'
import { Button } from 'react-bootstrap'
import Loading from '../../../../components/Loading'
import {
    CoinContainer,
    CoinDescription,
    CoinHeader,
    CoinName,
    CoinPrice,
} from './Coins.styles'
import Icon from '../../../../components/Icon/Icon'
import { NavLink } from 'react-router-dom'

const CoinView = ({ data, isLoading }) => {
    const { description, name, iconUrl, price } = data.coin

    const content = () => {
        console.log(data.coin)
        return (
            <CoinContainer>
                <CoinHeader>
                    <CoinName>
                        {name}
                        <Icon url={iconUrl} width={20} height={20} />
                    </CoinName>
                    <CoinPrice>
                        <span>Current price: {price} $ </span>
                        <NavLink to='history'>
                            <Button variant='outline-dark'>History</Button>
                        </NavLink>
                    </CoinPrice>
                </CoinHeader>
                <CoinDescription
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </CoinContainer>
        )
    }

    return <>{isLoading ? <Loading /> : content()}</>
}

export default CoinView
