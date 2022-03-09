import { TravelAdvisor, Crypto, Jph } from './pages'

import travelAdvisorRoutes from './pages/TravelAdvisor/routes'
import coinsRoutes from './pages/Crypto/routes'
import jphRoutes from './pages/JPH/routes'

const routes = [
    {
        path: '/travel-advisor',
        element: <TravelAdvisor />,
        name: 'Travel Advisor',
        children: [...travelAdvisorRoutes],
    },
    {
        path: '/crypto',
        element: <Crypto />,
        name: 'Crypto',
        children: [...coinsRoutes],
    },
    {
        path: '/jph',
        element: <Jph />,
        name: 'Json place holder',
        children: [...jphRoutes]
    }
]

export default routes
