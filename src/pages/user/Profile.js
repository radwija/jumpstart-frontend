import React, { useEffect } from 'react'
import { } from '../../components/OrderCard'
import { Link } from 'react-router-dom'
import { EditIcon } from '../../assets/SvgIcons'
import { PageHeading } from '../../components/PageHeading'
import UserLayout from '../../components/user/layout/UserLayout'
import useDocumentTitle from '../useDocumentTitle'

export const Profile = () => {
  useDocumentTitle("My Profile")
  return (
    <>
      <UserLayout>
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
      </UserLayout>
    </>
  )
}
