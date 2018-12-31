import React from 'react'

const Rainbow = (WrappedComponent) => {
  const colors = ['red', 'pink', 'orange', 'blue', 'green', 'yellow']
  const randomcolor = colors[Math.floor(Math.random() * 5)]
  const className = 'background-color=' + randomcolor
  // console.log(className)
  // randomcolor 뒤에 UI클래서에 맞게 값을 넣어주면 됨
  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    )
  }
}

export default Rainbow
