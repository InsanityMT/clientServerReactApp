import React, { useEffect } from 'react'
import CoinView from './Coin.view'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../../../../../actions'

const Coin = () => {
    const dispatch = useDispatch()
    const { coin } = useSelector((state) => state.coinsReducer)
    const { id } = useParams()
    useEffect(() => {
        dispatch(actions.rapidApiActions.coinRankingActions.getCoin(id))
    }, [id])
    return <>{coin && <CoinView data={coin} />}</>
}

export default Coin
