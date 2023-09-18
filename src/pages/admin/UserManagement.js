import React, { useEffect } from 'react'
import { AdminSidebar } from '../../components/admin/header/AdminSidebar'
import AdminLayout from '../../components/admin/layout/AdminLayout'
import { PageHeading } from '../../components/PageHeading'
import { Stat } from '../../components/Stat'
import useDocumentTitle from '../useDocumentTitle'
import { EyeIcon, TrashIcon } from '../../assets/SvgIcons'
import { Link, useNavigate } from 'react-router-dom'
import { AdminTable } from '../../components/AdminTable'
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit'
import { useRedirectUser } from '../../hooks/redirectUser'

const UserManagement = () => {
  useDocumentTitle('User Management')

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
        <PageHeading headingTitle='User Management' />
        <AdminTable>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Registered at</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Spongebob Squarepants</td>
              <td>spongebob@email.com</td>
              <td>07/09/2023</td>
              <td>USER</td>
              <td className='flex gap-3'>
                <Link className='btn'><EyeIcon /></Link>
                <button className='btn'><TrashIcon /></button>
              </td>
            </tr>
          </tbody>
        </AdminTable>
      </AdminLayout >
    </>
  )
}

export default UserManagement;