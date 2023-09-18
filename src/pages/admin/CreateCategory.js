import React, { useEffect } from 'react'
import { AdminSidebar } from '../../components/admin/header/AdminSidebar'
import AdminLayout from '../../components/admin/layout/AdminLayout'
import { PageHeading } from '../../components/PageHeading'
import { Stat } from '../../components/Stat'
import useDocumentTitle from '../useDocumentTitle'
import { BackIcon, EyeIcon, TrashIcon } from '../../assets/SvgIcons'
import { Link, useNavigate } from 'react-router-dom'
import { AdminTable } from '../../components/AdminTable'
import { BackButton } from '../../components/BackButton'
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit'
import { useRedirectUser } from '../../hooks/redirectUser'

const CreateCategory = () => {
  useDocumentTitle('Add Product')

  const auth = useAuthUser();
  const role = auth()?.role?.[0]
  const email = auth()?.email
  const token = auth()?.token
  const isLogin = useIsAuthenticated()
  const isAdmin = isLogin() && role === "ROLE_ADMIN"
  const navigate = useNavigate()
  const redirectUser = useRedirectUser()

  return (
    <>
      <AdminLayout>
        <div className='flex'>
          <BackButton to="/admin/inventory" />
          <PageHeading headingTitle='Create Category' />
        </div>
        <form action="" className='grid gap-y-3'>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category name</span>
            </label>
            <input type="text" placeholder="Category name" className="input input-bordered w-full" />
          </div>
          <button type='submit' className='btn btn-primary'>Add product</button>
        </form>
      </AdminLayout >
    </>
  )
}

export default CreateCategory;