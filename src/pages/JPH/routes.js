import Users from './tabs/Users'
import Posts from './tabs/Posts'
import Albums from './tabs/Albums'
import Todos from './tabs/Todos'

const routes = [
    {
        path: '/jph/users',
        element: <Users />,
        name: 'Users'
    },
    {
        path: '/jph/posts',
        element: <Posts />,
        name: 'Posts'
    },
    {
        path: '/jph/albums',
        element: <Albums />,
        name: 'Albums'
    },
    {
        path: '/jph/todos',
        element: <Todos />,
        name: 'Todos'
    }
]

export default routes