import React, {Component} from 'react'
import Child from './child'

export default class index extends Component {
  state = {
    fromParents: [
      {name: '이름01', age: 11, belt: 'black', id: 1},
      {name: '이름02', age: 13, belt: 'white', id: 2},
      {name: '이름03', age: 17, belt: 'yellow', id: 3}
    ]
  }
  render() {
    return (
      <div>
        <p>값을 넘겨 주자(부모)</p>
        <br />
        <Child fromParents={this.state.fromParents} />
      </div>
    )
  }
}
