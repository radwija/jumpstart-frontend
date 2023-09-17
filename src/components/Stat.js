import React from 'react'

export const Stat = (props) => {
  return (
    <>
      <div className="stats shadow">

        <div className="stat">
          <div className="stat-title">{props.name}</div>
          <div className="truncate stat-value">{props.amount}</div>
        </div>

      </div>
    </>
  )
}
