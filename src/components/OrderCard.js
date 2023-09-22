import React from 'react'
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div className='flex gap-3'>
      <Link to={`/product`} className='aspect-square border rounded'>
        <img src="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" className='object-contain w-20 h-20  rounded' />
      </Link>
      <div>
        <Link to={`/product`} className='text-lg font-medium'>Hot Wheels Fast and Furious Orange Nissan Skyline GT-R BNR34 R34</Link>
        <div>2 * $20</div>
      </div>
    </div>
  );
}

export const OrderCard = () => {
  return (
    <>
      <div className='p-4 bg-white border rounded shadow'>
        <div className='mb-3'>
          <div className='text-lg font-semibold'>Order ID: 200</div>
          <div>September 9, 2023 | <span className='font-semibold text-yellow-500'>PROCESSED</span></div>
          <span className='font-semibold text-red-500'>PRODUCT DELETED</span>
        </div>
        <div className='flex flex-col gap-4 mb-3'>
          <Product />
        </div>

        <div>Total amount:</div>
        <div className='text-3xl font-semibold text-primary'>$40</div>
      </div>
    </>
  )
}
