import Users from './tabs/Users'
import Posts from './tabs/Posts'

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
    }
]

export default routes