import React from 'react'

const Todos = ({todos, deleteTodo}) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div key={todo.id} onClick={() => deleteTodo(todo.id)}>
          <span>{todo.content}</span>
        </div>
      )
    })
  ) : (
    <p>입력하세요</p>
  )
  return <div>{todoList}</div>
}

export default Todos
