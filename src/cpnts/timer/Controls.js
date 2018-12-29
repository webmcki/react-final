import React from 'react'

const Controls = ({paused, onPausedToggle}) => {
  return (
    <div className="field is-grouped is-grouped-centered">
      <p className="control">
        <button
          className="button is-danger is-outlined is-rounded"
          disabled={paused}
          onClick={onPausedToggle}
        >
          일시정지
        </button>
      </p>
      <p className="control">
        <button
          className="button is-success is-outlined is-rounded"
          disabled={!paused}
          onClick={onPausedToggle}
        >
          계속
        </button>
      </p>
    </div>
  )
}

export default Controls
