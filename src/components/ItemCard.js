import React from 'react'
import { CategoryBadge } from './CategoryBadge'
import { TrashIcon } from '../assets/SvgIcons'
import { Link } from 'react-router-dom'

export const ItemCard = (props) => {
  return (
    <>
      <div className='flex flex-col gap-4 rounded border p-5'>
        <div className='flex gap-4'>
          <div className="w-20 h-20 aspect-square bg-white border rounded overflow-hidden">
            <Link to={`/p/${props.slug}`}>
              <img className="object-contain w-full h-full" src="https://media.gettyimages.com/id/1290195876/photo/smartphone-in-female-hands-taking-photo-isolated-on-white-background.jpg?s=612x612&w=gi&k=20&c=BxAh7CzDecHZsibLq7yHRi7zH8VLyo4zn0MmzvboVg4=" alt="" />
            </Link>
          </div>
          <div>
            <Link to={`/p/${props.slug}`} className="font-bold text-lg"><div>{props.productName}</div></Link>
            <CategoryBadge categoryName={props.categoryName} />
            <div className="">Price: ${props.price.toLocaleString("en-US")}</div>
            <div className="">Qty: ${props.quantity}</div>
            <div className="font-semibold text-lg">Total Price: ${props.itemPriceTotal.toLocaleString("en-US")}</div>
          </div>
        </div>
        <div className='flex items-center gap-4 justify-end'>
          <button className='text-gray-500'>
            <TrashIcon />
          </button>
          <div className="join">
            <button className="btn join-item">-</button>
            <input type="number" className="join-item mx-2 w-20 border text-center" min={1} max={10} />
            <button className="btn join-item">+</button>
          </div>
        </div>
      </div >
    </>
  )
}
