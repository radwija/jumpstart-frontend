import React from 'react'
import { AdminSidebar } from '../../components/admin/header/AdminSidebar'
import AdminLayout from '../../components/admin/layout/AdminLayout'
import { PageHeading } from '../../components/PageHeading'
import { Stat } from '../../components/Stat'
import useDocumentTitle from '../useDocumentTitle'
import { EyeIcon, TrashIcon } from '../../assets/SvgIcons'
import { Link } from 'react-router-dom'
import { AdminTable } from '../../components/AdminTable'

const OrderManagement = () => {
  useDocumentTitle('User Management')
  return (
    <>
      <AdminLayout>
        <PageHeading headingTitle='Order Management' />
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