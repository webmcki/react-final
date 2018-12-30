import React, {Component} from 'react'
import Todos from './Todos'
import Add from './Add'

export default class index extends Component {
  state = {
    todos: []
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <Add addTodo={this.addTodo} />
      </div>
    )
  }
}
