import { TravelAdvisor, CoinRanking } from './pages'

import travelAdvisorRoutes from './pages/TravelAdvisor/routes'
import coinsRoutes from './pages/CoinRanking/routes'

const routes = [
    {
        path: '/travel-advisor',
        element: <TravelAdvisor />,
        name: 'Travel Advisor',
        children: [...travelAdvisorRoutes],
    },
    {
        path: '/coin-ranking',
        element: <CoinRanking />,
        name: 'Coin Ranking',
        children: [...coinsRoutes],
    },
]

export default routes
