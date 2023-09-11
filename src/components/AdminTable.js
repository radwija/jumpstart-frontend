import React from 'react'

export const AdminTable = (props) => {
  return (
    <>
      <div className='relative overflow-x-scroll'>
        <table className='w-full min-w-[800px] border-collapse'>
          {props.children}
        </table>
      </div>
    </>
  )
}
