import React, { useMemo } from 'react'
import CoinHistoryView from './CoinHistory.view'
import useDataFromRequest from '../../../../hooks/useDataFromRequest'
import coinsRanking from '../../../../constants/coins-ranking'
import { useParams } from 'react-router-dom'
import _ from 'lodash'
import moment from 'moment'


const CoinHistory = () => {
    const { id } = useParams()
    const request = useMemo(() => coinsRanking.history.get(id), [id])
    const { data, isLoading } = useDataFromRequest(request)
    const serialize = () => {
        return _.cloneDeep(data?.history)?.reverse()?.reduce((acc, dot) => {
            if(dot?.timestamp && dot?.price) {
                acc.push({
                    name: moment(dot.timestamp * 1000).format('DD.MM.YY'),
                    price: dot.price
                })
            }
            return acc
        }, [])
    }
    const serializeData = useMemo(() => serialize(), [data])
    return (
        <CoinHistoryView data={serializeData} isLoading={isLoading} />
    )
}

export default CoinHistory