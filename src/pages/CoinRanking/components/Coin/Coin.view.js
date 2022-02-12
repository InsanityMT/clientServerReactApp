import React from 'react'
import Loading from '../../../../components/Loading'
import { CoinContainer, CoinDescription, CoinHeader, CoinName, CoinPrice } from './Coins.styles'

const CoinView = ({ data, isLoading }) => {
    const { description, name, iconUrl, price } = data.coin

    const content = () => {
        console.log(data.coin )
        return (
            <CoinContainer>
                <CoinHeader>
                    <CoinName>{name} <object data={iconUrl} width="20" height="20"></object></CoinName>
                    <CoinPrice>Current price:  {price} $</CoinPrice>
                </CoinHeader>
                <CoinDescription dangerouslySetInnerHTML={{__html: description}} />
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