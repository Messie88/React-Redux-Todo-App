import React from 'react'
import { useSelector } from 'react-redux'

import TodoItem from './TodoItem'

import * as S from './TodoList.styled'

const selectedTodos = (state) => state.todos

const TodoList = () => {
  const todos = useSelector(selectedTodos)
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
