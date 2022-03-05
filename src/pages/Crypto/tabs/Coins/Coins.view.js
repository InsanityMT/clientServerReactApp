import React from 'react'
import Search from '../../../../components/Search'
import SearchOption from './components/SearchOption'
import actions from '../../../../actions'
import { Outlet } from 'react-router-dom'

const CoinsView = ({ data }) => {
    return (
        <div>
            <Search
                searchAction={actions.rapidApiActions.coinRankingActions.getCoins}
                data={data}
                CustomOption={SearchOption}
            />
            <Outlet />
        </div>
    )
}

export default CoinsView
