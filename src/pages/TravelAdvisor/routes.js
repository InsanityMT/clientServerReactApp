import TravelAdvisorFactory from './TravelAdvisorFactory'

const routes = [
    {
        path: '/travel-advisor/hotels',
        name: 'Hotels',
        element: <TravelAdvisorFactory />,
    },
    {
        path: '/travel-advisor/restaurants',
        name: 'Restaurants',
        element: <TravelAdvisorFactory />,
    },
]

export default routes
