import { Outlet } from 'react-router-dom'
import routes from './routes'
import Header from '../../components/Header'

const TravelAdvisor = () => {
    return (
        <>
            <Header
                routes={routes}
                title='Travel Advisor'
                root='/travel-advisor'
            />
            <Outlet />
        </>
    )
}

export default TravelAdvisor
