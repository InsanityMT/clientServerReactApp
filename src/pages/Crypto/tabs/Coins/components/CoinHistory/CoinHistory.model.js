import React, { useMemo, useEffect } from 'react'
import CoinHistoryView from './CoinHistory.view'
import { useParams } from 'react-router-dom'
import _ from 'lodash'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../../../../../actions'

const CoinHistory = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { history, coin } = useSelector((state) => state.coinsReducer)

    const serialize = () => {
        return _.cloneDeep(history)
            ?.reverse()
            ?.reduce((acc, dot) => {
                if (dot?.timestamp && dot?.price) {
                    acc.push({
                        name: moment(dot.timestamp * 1000).format('DD.MM.YY'),
                        price: dot.price,
                    })
                }
                return acc
            }, [])
    }
    const serializeData = useMemo(() => serialize(), [history, serialize])

    useEffect(() => {
        dispatch(actions.rapidApiActions.coinRankingActions.getHistory(id))
        if (coin === null)
            dispatch(actions.rapidApiActions.coinRankingActions.getCoin(id))
    }, [])

    return (
        <CoinHistoryView
            data={serializeData}
            history={history}
            coin={coin}
            id={id}
        />
    )
}

export default CoinHistory
