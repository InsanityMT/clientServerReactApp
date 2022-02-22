import React, { useMemo } from 'react'
import CoinView from './Coin.view'
import { useParams } from 'react-router-dom'
import coinsRanking from '../../../../constants/coins-ranking'
import useDataFromRequest from '../../../../hooks/useDataFromRequest'

const Coin = () => {
    const { id } = useParams()
    const request = useMemo(() => coinsRanking.coin.get(id), [id])
    const { data, isLoading } = useDataFromRequest(request)
    return (
        <>
            {
                data?.coin && (
                    <CoinView data={data} isLoading={isLoading} />
                )
            }
        </>
    )
}

export default Coin