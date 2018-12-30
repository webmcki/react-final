import React, {Component} from 'react'
import Todos from './Todos'

export default class index extends Component {
  state = {
    todos: [{id: 1, content: '컨텐츠1'}, {id: 2, content: '컨텐츠2'}]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id
    })
    this.setState({
      todos: todos
    })
  }
  render() {
    return <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
  }
}
