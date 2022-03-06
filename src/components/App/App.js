import { useRoutes } from 'react-router-dom'
import routes from '../../routes'
import Header from '../Header'

const App = () => {
    const router = useRoutes(routes)
    return (
        <>
            <Header routes={routes} title="APIs" root="/" />
            {router}
        </>
    )
}

export default App
