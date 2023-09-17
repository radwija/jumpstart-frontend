import React from 'react'
import { PageHeading } from '../../components/PageHeading';
import UserLayout from '../../components/user/layout/UserLayout';
import useDocumentTitle from '../useDocumentTitle';
import { BackButton } from '../../components/BackButton';

const UpdateProfile = () => {
  useDocumentTitle("Update Profile")
  return (
    <UserLayout>
      <div className='flex'>
        <BackButton to="/user" />
        <PageHeading headingTitle='Update profile' />
      </div>
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
            <span className="label-text">Country</span>
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
    </UserLayout >
  )
}

export default UpdateProfile;