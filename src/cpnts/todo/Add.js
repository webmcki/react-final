import React, {Component} from 'react'

export default class Add extends Component {
  state = {
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    //console.log(this.state)
    this.props.addTodo(this.state)
    this.setState({
      content: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">새로운 할일: </label>
          <input
            type="text"
            id="name"
            onChange={this.handleChange}
            value={this.state.content}
          />

          <button>추가</button>
        </form>
      </div>
    )
  }
}
