import React from 'react'
import { AdminSidebar } from '../../components/admin/header/AdminSidebar'
import AdminLayout from '../../components/admin/layout/AdminLayout'
import { PageHeading } from '../../components/PageHeading'
import { Stat } from '../../components/Stat'
import useDocumentTitle from '../useDocumentTitle'
import { EyeIcon, TrashIcon } from '../../assets/SvgIcons'
import { Link } from 'react-router-dom'
import { AdminTable } from '../../components/AdminTable'

const UserManagement = () => {
  useDocumentTitle('User Management')
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
              <td>
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