import React from 'react'
import Search from '../../../../components/Search/index'
import coinsRanking from '../../../../constants/coins-ranking'
import SearchOption from '../../components/SearchOption/SearchOption'

const CoinsView = ({ serialization }) => {
    return (
        <div>
            <Search
                request={coinsRanking.coins.get()}
                serialization={serialization}
                CustomOption={SearchOption}
            />
        </div>
    )
}

export default CoinsView
