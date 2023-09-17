import React, { useEffect, useState } from 'react'
import { } from '../../components/OrderCard'
import { Link, useNavigate } from 'react-router-dom'
import { EditIcon } from '../../assets/SvgIcons'
import { PageHeading } from '../../components/PageHeading'
import UserLayout from '../../components/user/layout/UserLayout'
import useDocumentTitle from '../useDocumentTitle'
import { useAuthUser, useIsAuthenticated, useSignOut } from 'react-auth-kit'
import { myProfileApi } from '../../api/user-api'

export const Profile = () => {
  useDocumentTitle("My Profile")

  const auth = useAuthUser();
  const role = auth()?.role?.[0]
  const token = auth()?.token
  const isLogin = useIsAuthenticated()
  const isAdmin = isLogin() && role === "ROLE_ADMIN"

  const [userProfile, setUserProfile] = useState({})

  useEffect(() => {
    myProfileApi(token)
      .then(res => {
        setUserProfile({
          firstName: res.firstName,
          lastName: res.lastName,
          gender: res.gender,
          city: res.city,
          country: res.country,
          address: res.address
        });
      })
      .catch(error => {
        console.error(error);
      });
  }, [token])

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
                <span>{userProfile?.firstName}</span>
              </div>
              <div className='flex gap-4'>
                <span className='w-28 flex-shrink-0'>Last name</span>
                <span>{userProfile?.lastName}</span>
              </div>
              <div className='flex gap-4'>
                <span className='w-28 flex-shrink-0'>Gender</span>
                <span>{userProfile?.gender}</span>
              </div>
              <div className='flex gap-4'>
                <span className='w-28 flex-shrink-0'>City</span>
                <span>{userProfile?.city}</span>
              </div>
              <div className='flex gap-4'>
                <span className='w-28 flex-shrink-0'>Country</span>
                <span>{userProfile?.country}</span>
              </div>
              <div className='flex gap-4'>
                <span className='w-28 flex-shrink-0'>Address</span>
                <p>{userProfile?.address}</p>
              </div>
            </div>
          </div>
        </div>
      </UserLayout>
    </>
  )
}
