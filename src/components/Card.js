import React from 'react'

export const Card = () => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <a href="https://youtube.com">
            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
          </a>
        </figure>
        <div className="card-body">
          <a href="https://youtube.com">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
          </a>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </>
  )
}
