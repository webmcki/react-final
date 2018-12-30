import React, {Component} from 'react'

export default class child extends Component {
  render() {
    const {fromParents} = this.props
    const fromParentsList = fromParents.map((fromParent) => {
      return (
        <div key={fromParent.id}>
          <p>값을 넘겨 받자(자식)</p>
          <div>이름: {fromParent.name}</div>
          <div>나이: {fromParent.age}</div>
          <div>벨트: {fromParent.belt}</div>
          <div>-----------------------</div>
        </div>
      )
    })

    return <div>{fromParentsList}</div>
  }
}
