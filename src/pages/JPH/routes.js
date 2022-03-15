import Users from './tabs/Users'
import Posts from './tabs/Posts'
import Albums from './tabs/Albums'
import Todos from './tabs/Todos'
import Post from './tabs/Posts/Components/Post'
import User from './tabs/Users/components/User'
import Album from './tabs/Albums/components/Album'

const routes = [
    {
        path: '/jph/users',
        element: <Users />,
        name: 'Users',
    },
    {
        path: '/jph/posts',
        element: <Posts />,
        name: 'Posts',
    },
    {
        path: '/jph/albums',
        element: <Albums />,
        name: 'Albums',
    },
    {
        path: '/jph/todos',
        element: <Todos />,
        name: 'Todos',
    },
    {
        path: '/jph/posts/:id',
        element: <Post />,
    },
    {
        path: '/jph/users/:id',
        element: <User />,
    },
    {
        path: '/jph/albums/:id',
        element: <Album />,
    },
]

export default routes
