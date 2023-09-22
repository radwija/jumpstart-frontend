import React from 'react'
import { CartIcon } from '../assets/SvgIcons'
import { Link } from 'react-router-dom'
import { CategoryBadge } from './CategoryBadge'

const ProductCard = (props) => {
  return (
    <>
      <div className="card card-compact bg-base-100 border shadow">
        <Link to={`/p/${props.slug}`}>
          <figure className='aspect-square'>
            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
          </figure>
        </Link>
        <hr />
        <div className="card-body">
          <CategoryBadge categorySlug={`${props.category.categorySlug}`} categoryName={props.category.categoryName} />
          <Link to={`/p/${props.slug}`}>
            <h2 className="truncate-card card-title">{props.productName}</h2>
          </Link>
          <div>Price:</div>
          <div className='text-xl font-semibold m-0 p-0'>${props.price}</div>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <CartIcon /> <span className='hidden sm:hidden md:hidden lg:block'>Add to cart</span>
            </button>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default ProductCard
