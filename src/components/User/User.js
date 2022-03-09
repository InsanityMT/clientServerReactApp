import React from 'react'
import { AdditionalInformation, Address, MainInformation, UserContainer } from './User.styles'

const User = ({ user }) => {
    const { name, email, phone, website, address } = user
    const { city, street, zipcode } = address
    return (
        <UserContainer>
            <MainInformation>
                Name: {name} <br />
                Email: {email}
            </MainInformation>
            <AdditionalInformation>
                Phone: {phone} <br/>
                website: {website}
            </AdditionalInformation>
            <Address>
                City: {city} <br/>
                Street: {street} <br/>
                Zip-code: P{zipcode}
            </Address>
        </UserContainer>
    )
}

export default User