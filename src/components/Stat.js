import React from 'react'

export const Stat = (props) => {
  return (
    <>
      <div
        className="text-center text-2xl font-medium py-4 px-6 border border-2 border-primary rounded-lg bg-light"
      >
        <p className="">{props.name}</p>
        <p className="text-lightBlue">{props.amount}</p>
      </div>
    </>
  )
}
