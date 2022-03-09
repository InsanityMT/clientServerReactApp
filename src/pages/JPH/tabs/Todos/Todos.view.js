import React from 'react'
import { TodoContainer, TodosContainer } from './Todos.styles'

const TodosView = ({ todos }) => {
    console.log(todos)
    return (
        <TodosContainer>
            {todos?.map(todo =>
                <TodoContainer>
                    <span>{todo.userId}</span>
                    <span>{todo.title}</span>
                </TodoContainer>
            )}
        </TodosContainer>
    )
}

export default TodosView