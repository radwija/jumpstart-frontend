import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'
import { BagIcon, CartIcon, EditIcon, LogOutIcon, UserIcon } from '../../assets/SvgIcons'

const Sidebar = () => {
  return (
    <div className="border shadow rounded p-5">
      <div className='text-center flex flex-col gap-3'>
        <img src="https://i1.sndcdn.com/artworks-000139163741-dk8qn7-t500x500.jpg" alt="" className='mx-auto object-cover mask mask-circle w-24' />
        <h1 className='text-xl font-semibold'>Naruto Uzumaki</h1>
      </div>
      <ul className='mt-6'>
        <li><Link to={`/user/profile`} className='w-full px-3 py-4 flex gap-3 rounded hover:bg-slate-100'>{<UserIcon />} Profile</Link></li>
        <li><Link to={`/user/orders`} className='w-full px-3 py-4 flex gap-3 rounded hover:bg-slate-100'>{<BagIcon />} Orders</Link></li>
        <li><Link to={`/my-cart`} className='w-full px-3 py-4 flex gap-3 rounded hover:bg-slate-100'>{<CartIcon />} Shopping Cart</Link></li>
        <li><button className='w-full px-3 py-4 flex gap-3 rounded hover:bg-slate-100'>{<LogOutIcon />} Log Out</button></li>
      </ul>
    </div>
  );
}

const ProfileInfo = () => {
  return (
    <>
      <div className='grid grid-cols-9 gap-4'>
        <div class="flex flex-col gap-4 col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-3">
          <div className='flex flex-col gap-3 mx-auto'>
            <div className='text-center flex flex-col gap-3 mask mask-circle w-32 sm:w-32 md:w-32 lg:w-full'>
              <img src="https://i1.sndcdn.com/artworks-000139163741-dk8qn7-t500x500.jpg" alt="" className='mx-auto object-cover w-full h-full' />
            </div>
            <button className='btn btn-primary w-full'>Change picture</button>
          </div>
        </div>
        <div class="col-span-9 sm:col-span-9 md:col-span-9 lg:col-span-6">
          <div className='flex gap-1 mb-3'>
            <h1 className='text-3xl font-semibold'>My profile</h1>
            <button>
              <EditIcon />
            </button>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex gap-4'>
              <span className='w-28 flex-shrink-0'>First name</span>
              <span>Naruto</span>
            </div>
            <div className='flex gap-4'>
              <span className='w-28 flex-shrink-0'>Last name</span>
              <span>Uzumaki</span>
            </div>
            <div className='flex gap-4'>
              <span className='w-28 flex-shrink-0'>Gender</span>
              <span>Male</span>
            </div>
            <div className='flex gap-4'>
              <span className='w-28 flex-shrink-0'>City</span>
              <span>Denpasar</span>
            </div>
            <div className='flex gap-4'>
              <span className='w-28 flex-shrink-0'>Country</span>
              <span>Indonesia</span>
            </div>
            <div className='flex gap-4'>
              <span className='w-28 flex-shrink-0'>Address</span>
              <p>Jl. Raya Puputan No.86, Dangin Puri Klod, Kec. Denpasar Tim., Kota Denpasar</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const Profile = () => {
  return (
    <>
      <Layout>
        <div className='py-10 flex flex-wrap flex-col sm:flex sm:flex-wrap sm:flex-col gap-y-5 sm:gap-y-5 md:gap-y-5 lg:gap-y-5 md:grid md:grid-cols-12 px-5 sm:px-5 md:px-44 lg:px-20'>
          <div className='mx-5 hidden sm:hidden md:hidden lg:block lg:col-span-3'>
            <Sidebar />
          </div>
          <div className='mx-5 sm:col-span-12 md:col-span-12 lg:col-span-9 bg-white'>
            <div className="border rounded p-5">
              <ProfileInfo />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
