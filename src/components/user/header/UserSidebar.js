import React from 'react'
import { Link } from 'react-router-dom'
import { BagIcon, CartIcon, UserIcon } from '../../../assets/SvgIcons'

export const UserSidebar = () => {
  return (
    <div className="border shadow rounded p-5">
      <div className='text-center flex flex-col gap-3'>
        <img src="https://i1.sndcdn.com/artworks-000139163741-dk8qn7-t500x500.jpg" alt="" className='mx-auto object-cover mask mask-circle w-24' />
        <h1 className='text-xl font-semibold'>Naruto Uzumaki</h1>
      </div>
      <ul className='mt-6'>
        <li><Link to={`/user/profile`} className='w-full px-3 py-4 flex gap-3 rounded hover:bg-slate-100'><UserIcon /> Profile</Link></li>
        <li><Link to={`/user/orders`} className='w-full px-3 py-4 flex gap-3 rounded hover:bg-slate-100'><BagIcon /> Orders</Link></li>
        <li><Link to={`/my-cart`} className='w-full px-3 py-4 flex gap-3 rounded hover:bg-slate-100'><CartIcon /> Shopping Cart</Link></li>
      </ul>
    </div>
  )
}
