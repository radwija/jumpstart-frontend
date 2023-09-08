import React from 'react'
import { CartIcon } from '../assets/SvgIcons'

const ProductCard = () => {
  return (
    <>
      <div className="card card-compact bg-base-100 border shadow">
        <figure className='aspect-square'>
          <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
        </figure>
        <hr />
        <div className="card-body">
          <a href='' className="badge badge-accent">Toy</a>
          <h2 className="card-title">Hot Wheels Fast and Furious</h2>
          <div>Price:</div>
          <div className='text-xl font-semibold m-0 p-0'>$10</div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <CartIcon /> <span className='hidden sm:hidden md:hidden lg:block'>Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
