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

const OrderManagement = () => {
  useDocumentTitle('Order Management')

  const auth = useAuthUser();
  const role = auth()?.role?.[0]
  const email = auth()?.email
  const token = auth()?.token
  const isLogin = useIsAuthenticated()
  const isAdmin = isLogin() && role === "ROLE_ADMIN"
  const navigate = useNavigate()
  const redirectUser = useRedirectUser()

  const orderManagementNavigation = [
    {
      name: "All orders",
      path: ""
    },
    {
      name: "Processed",
      path: ""
    },
    {
      name: "Completed",
      path: ""
    },
    {
      name: "Cancelled",
      path: ""
    },
  ]

  return (
    <>
      <AdminLayout>
        <PageHeading headingTitle='Order Management' />
        <div className='overflow-x-auto mb-5'>
          <div className='flex gap-3'>
            {orderManagementNavigation.map((link) => (
              <Link to={link.path} key={link.name} className='btn btn-outline btn-primary'>{link.name}</Link>
            ))}
          </div>
        </div>
        <AdminTable>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Customer Name</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>1</td>
              <td>Customer Name</td>
              <td>Date</td>
              <td>Status</td>
              <td>Total Amount</td>
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

export default OrderManagement;