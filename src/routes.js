import { TravelAdvisor, Crypto } from './pages'

import travelAdvisorRoutes from './pages/TravelAdvisor/routes'
import coinsRoutes from './pages/Crypto/routes'

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
]

export default routes
