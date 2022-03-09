import React from 'react'
import { UsersContainer } from './Users.styles'
import User from '../../../../components/User/User'

const UsersView = ({ users }) => {
    return (
        <UsersContainer>
            {users?.map((user, idx) =>
                <User user={user} key={user.id}/>
            )}

        </UsersContainer>
    )
}

export default UsersView