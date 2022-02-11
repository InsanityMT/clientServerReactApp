import {
    Coins
} from './tabs'
import Coin from './components/Coin'

const routes = [
    {
        path: '/coin-ranking/coins',
        name: 'Coins',
        element: <Coins />,
    },
    {
        path: '/coin-ranking/coins/:id',
        element: <Coin />
    }
]

export default routes