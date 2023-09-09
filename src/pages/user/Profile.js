import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'
import { BagIcon, CartIcon, LogOutIcon, UserIcon } from '../../assets/SvgIcons'

export const Profile = () => {
  return (
    <>
      <Layout>
        <div className='py-10 flex flex-wrap flex-col sm:flex sm:flex-wrap sm:flex-col gap-y-5 sm:gap-y-5 md:gap-y-5 lg:gap-y-5 md:grid md:grid-cols-12 px-5 sm:px-5 md:px-36 lg:px-20'>
          <div className='mx-5 sm:col-span-12 md:col-span-12 lg:col-span-3'>
            <div className="border shadow rounded p-5">
              <div className='text-center flex flex-col gap-3'>
                <img src="https://i1.sndcdn.com/artworks-000139163741-dk8qn7-t500x500.jpg" alt="" className='mx-auto object-cover mask mask-circle w-24' />
                <h1 className='text-xl font-semibold'>Naruto Uzumaki</h1>
              </div>
              <ul className='mt-6'>
                <li><Link to={`/user/profile`} className='w-full px-3 py-4 flex gap-3 rounded hover:bg-slate-100'>{<UserIcon />} Profile</Link></li>
                <li><Link to={`/user/orders`} className='w-full px-3 py-4 flex gap-3 rounded hover:bg-slate-100'>{<BagIcon />} Orders</Link></li>
                <li><Link to={`/my-cart`} className='w-full px-3 py-4 flex gap-3 rounded hover:bg-slate-100'>{<CartIcon />} Shopping Cart</Link></li>
                <li><Link to={``} className='w-full px-3 py-4 flex gap-3 rounded hover:bg-slate-100'>{<LogOutIcon />} Log Out</Link></li>
              </ul>
            </div>
          </div>
          <div className='mx-5 sm:col-span-12 md:col-span-12 lg:col-span-9 bg-white'>
            <div className="border rounded p-5">

            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
