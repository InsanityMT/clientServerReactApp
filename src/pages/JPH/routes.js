import Users from './tabs/Users'
import Posts from './tabs/Posts'
import Albums from './tabs/Albums'

const routes = [
    {
        path: '/jph/users',
        element: <Users />,
        name: 'Users'
    },
    {
        path: 'jph/posts',
        element: <Posts />,
        name: 'Posts'
    },
    {
        path: 'jph/albums',
        element: <Albums />,
        name: 'Albums'
    },
]

export default routes