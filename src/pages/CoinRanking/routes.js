import { Coins } from './tabs'
import Coin from './components/Coin'
import CoinHistory from './components/CoinHistory'
import Exchanges from './tabs/Exchanges'

const routes = [
    {
        path: '/crypto/coins',
        name: 'Coins',
        element: <Coins />,
    },
    {
        path: '/crypto/coins/:id',
        element: <Coin />,
    },
    {
        path: '/crypto/coins/:id/history',
        element: <CoinHistory />
    },
    {
        path: '/crypto/exchanges',
        element: <Exchanges />,
        name: 'Exchanges'
    }
]

export default routes
