import React, {Component} from 'react'

export default class index extends Component {
  state = {
    name: null,
    age: null,
    belt: null
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    //console.log(this.state)
    this.props.addForm(this.state)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">이름</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="name">나이</label>
          <input type="text" id="age" onChange={this.handleChange} />
          <label htmlFor="name">벨트</label>
          <input type="text" id="belt" onChange={this.handleChange} />
          <button>추가</button>
        </form>
      </div>
    )
  }
}
