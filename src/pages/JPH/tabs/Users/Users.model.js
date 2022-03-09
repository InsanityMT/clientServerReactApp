import React, { useEffect } from 'react'
import UsersView from './Users.view'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../../../actions'
import { findItemInCollectionByKeyValue, getUniqKeysFromCollectionByKey } from '../../../../utils/array'

const UsersModel = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        if(!users) {
            dispatch(actions.JphActions.getUsers())
        }
    }, [])
    const { users } = useSelector(state => state.jphReducer)
    return (
      <UsersView users={users} />
    )
}

export default UsersModel