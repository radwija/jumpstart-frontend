import React from 'react'

export const ConfirmWindow = (props) => {
  return (
    <>
      <button className={props.buttonClass ? props.buttonClass : "btn"} onClick={() => document.getElementById(props.elementId).showModal()}>{props.children}</button>
      <dialog id={props.elementId} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Confirmation</h3>
          <p className="font-semibold pt-4">{props.message}</p>
          <p className="py-3">{props.productName}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Cancel</button>
            </form>
            <button type='button'
              className='btn btn-error'
              onClick={props.action}>Yes, delete product</button>
          </div>
        </div>
      </dialog>
    </>
  )
}
