import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../../../../../actions'
import { findItemInCollectionByKeyValue } from '../../../../../../utils/array'
import { useParams } from 'react-router-dom'
import User from '../../../../../../components/User/User'
import { UserContainer } from '../../Users.styles'

const UserModel = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
       if (!users) dispatch(actions.JphActions.getUsers())
    }, [])
    const { users } = useSelector(state => state.jphReducer)
    const user = useMemo(() => findItemInCollectionByKeyValue(users, 'id', +id), [users, id])
    return (
        <UserContainer>
       <User user={user} />
        </UserContainer>
    )
}

export default UserModel