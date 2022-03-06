import { Coins, Exchanges } from './tabs'
import Coin from './tabs/Coins/components/Coin'
import CoinHistory from './tabs/Coins/components/CoinHistory'

const routes = [
    {
        path: '/crypto/coins',
        name: 'Coins',
        element: <Coins />,
        children: [
            {
                path: '/crypto/coins/:id',
                element: <Coin />,
            },
            {
                path: '/crypto/coins/:id/history',
                element: <CoinHistory />,
            },
        ],
    },
    {
        path: '/crypto/exchanges',
        element: <Exchanges />,
        name: 'Exchanges',
    },
]

export default routes
