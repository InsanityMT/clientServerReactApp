import React, { useEffect } from 'react'
import TodosView from './Todos.view'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../../../actions'

const TodosModel = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.JphActions.getTodos())
    }, [])
    const { todos } = useSelector((state) => state.jphReducer)
    return <TodosView todos={todos} />
}

export default TodosModel
