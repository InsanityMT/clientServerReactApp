import Users from './tabs/Users'
import Posts from './tabs/Posts'
import Albums from './tabs/Albums'
import Todos from './tabs/Todos'
import Coin from '../Crypto/tabs/Coins/components/Coin'
import Post from './tabs/Posts/Components/Post'

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
    },
    {
        path: '/jph/posts/:id',
        element: <Post />,
    }
]

export default routes