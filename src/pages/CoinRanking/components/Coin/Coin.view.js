import React from 'react'
import Loading from '../../../../components/Loading'
import { CoinContainer, CoinDescription, CoinHeader, CoinName, CoinPrice } from './Coins.styles'
import Icon from '../../../../components/Icon/Icon'

const CoinView = ({ data, isLoading }) => {
    const { description, name, iconUrl, price } = data.coin

    const content = () => {
        console.log(data.coin)
        return (
            <CoinContainer>
                <CoinHeader>
                    <CoinName>{name}
                        <Icon url={iconUrl} width={20} height={20} />
                    </CoinName>
                    <CoinPrice>Current price: {price} $</CoinPrice>
                </CoinHeader>
                <CoinDescription dangerouslySetInnerHTML={{ __html: description }} />
            </CoinContainer>
        )
    }

    return (
        <>
            {isLoading ? <Loading /> : content()}
        </>
    )
}

export default CoinView