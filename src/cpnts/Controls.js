import React from 'react'

const Controls = (props) => {
  return (
    <div class="field is-grouped">
      <p class="control">
        <a class="button is-link">일시정지</a>
      </p>
      <p class="control">
        <a class="button">Cancel</a>
      </p>
      <p class="control">
        <a class="button is-danger">계속</a>
      </p>
    </div>
  )
}

export default Controls
