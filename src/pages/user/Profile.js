import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import { Link, useLocation } from 'react-router-dom'
import { BagIcon, CartIcon, EditIcon, LogOutIcon, UserIcon } from '../../assets/SvgIcons'
import { OrderCard } from '../../components/OrderCard'
import { PageHeading } from '../../components/PageHeading'

const Sidebar = () => {
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
        <li><button className='w-full px-3 py-4 flex gap-3 rounded hover:bg-slate-100'><LogOutIcon /> Log Out</button></li>
      </ul>
    </div>
  );
}

const ProfileInfo = () => {
  return (
    <>
      <div className='grid grid-cols-9 gap-4'>
        <div className="flex flex-col gap-4 col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-3">
          <div className='flex flex-col gap-3 mx-auto'>
            <div className='text-center flex flex-col gap-3 mask mask-circle w-32 sm:w-32 md:w-32 lg:w-full'>
              <img src="https://i1.sndcdn.com/artworks-000139163741-dk8qn7-t500x500.jpg" alt="" className='mx-auto object-cover w-full h-full' />
            </div>
            <button className='btn btn-primary w-full'>Change picture</button>
          </div>
        </div>
        <div className="col-span-9 sm:col-span-9 md:col-span-9 lg:col-span-6">
          <div className='flex gap-1 mb-3'>
            <PageHeading headingTitle='My profile' />
            <Link to={'/user/profile/update'}>
              <EditIcon />
            </Link>
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

const UpdateProfileForm = () => {
  return (
    <>
      <PageHeading headingTitle='Update profile' />
      <form action="" className='grid gap-y-3'>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">First name</span>
          </label>
          <input type="text" placeholder="First name" className="input input-bordered w-full" />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Last name</span>
          </label>
          <input type="text" placeholder="Last name" className="input input-bordered w-full" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Gender</span>
          </label>
          <select className="select select-bordered max-w-xs">
            <option disabled selected>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">City</span>
          </label>
          <input type="text" placeholder="City" className="input input-bordered w-full" />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="Country" className="input input-bordered w-full" />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input type="text" placeholder="Address" className="input input-bordered w-full" />
        </div>
        <button type='submit' className='btn btn-primary'>Save update</button>
      </form>
    </>
  );
}

const Orders = () => {
  return (
    <>
      <PageHeading headingTitle='Order history' />
      <ul className='flex gap-3 mb-2'>
        <li><Link className='btn btn-outline btn-primary btn-sm'>All orders</Link></li>
        <li><Link className='btn btn-outline btn-primary btn-sm'>Processed</Link></li>
        <li><Link className='btn btn-outline btn-primary btn-sm'>Completed</Link></li>
        <li><Link className='btn btn-outline btn-primary btn-sm'>Cancelled</Link></li>
      </ul>
      <div className='flex flex-col gap-4'>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </>
  );
}

export const Profile = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const handlePageView = () => {
    switch (currentPath) {
      case '/user/profile':
        return <ProfileInfo />
      case '/user/profile/update':
        return <UpdateProfileForm />
      case '/user/orders':
        return <Orders />
      default:
        return <ProfileInfo />
    }
  }
  // useEffect(() => {
  //   handlePageView();
  // })
  return (
    <>
      <Layout>
        <div className='py-10 flex flex-wrap flex-col sm:flex sm:flex-wrap sm:flex-col gap-y-5 sm:gap-y-5 md:gap-y-5 lg:gap-y-5 md:grid md:grid-cols-12 px-5 sm:px-5 md:px-44 lg:px-20'>
          <div className='mx-5 hidden sm:hidden md:hidden lg:block lg:col-span-3'>
            <Sidebar />
          </div>
          <div className='mx-5 sm:col-span-12 md:col-span-12 lg:col-span-9 bg-white'>
            <div className="border rounded p-5">
              {
                handlePageView()
              }
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
