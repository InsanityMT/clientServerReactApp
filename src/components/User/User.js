import React from 'react'
import {
    AdditionalInformation,
    Address,
    MainInformation,
    UserContainer,
    UserLink,
} from './User.styles'
import { NavLink } from 'react-router-dom'

const User = ({ user }) => {
    return (
        <UserContainer>
            <MainInformation>
                <UserLink to={`/jph/users/${user.id}`}>
                    Name: {user?.name}
                </UserLink>
                <span>Email: {user?.email}</span>
            </MainInformation>
            <AdditionalInformation>
                <span>Phone: {user?.phone}</span>
                <span>website: {user?.website}</span>
            </AdditionalInformation>
            <Address>
                <span>City: {user?.address?.city}</span>
                <span>Street: {user?.address?.street}</span>
                <span>Zip-code: {user?.address?.zipcode}</span>
            </Address>
        </UserContainer>
    )
}

export default User
