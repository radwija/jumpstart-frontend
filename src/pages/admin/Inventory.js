import React from 'react'
import { AdminSidebar } from '../../components/admin/header/AdminSidebar'
import AdminLayout from '../../components/admin/layout/AdminLayout'
import { PageHeading } from '../../components/PageHeading'
import { Stat } from '../../components/Stat'
import useDocumentTitle from '../useDocumentTitle'
import { EditIcon, EyeIcon, TrashIcon } from '../../assets/SvgIcons'
import { Link } from 'react-router-dom'
import { AdminTable } from '../../components/AdminTable'

const Inventory = () => {
  useDocumentTitle('User Management')

  const inventoryNavigation =
    [
      {
        name: "+ Add product",
        path: ""
      },
      {
        name: "Create category",
        path: ""
      },
    ]

  return (
    <>
      <AdminLayout>
        <PageHeading headingTitle='Inventory' />
        <div className='overflow-x-auto mb-5'>
          <div className='flex gap-3'>
            {inventoryNavigation.map((link) => (
              <Link to={link.path} key={link.name} className='btn btn-outline btn-primary'>{link.name}</Link>
            ))}
          </div>
        </div>
        <AdminTable>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>User ID</td>
              <td>Customer Name</td>
              <td>Date</td>
              <td>Status</td>
              <td>Total Amount</td>
              <td className='flex gap-3'>
                <Link className='btn'><EyeIcon /></Link>
                <Link className='btn'><EditIcon /></Link>
                <button className='btn'><TrashIcon /></button>
              </td>
            </tr>
          </tbody>
        </AdminTable>
      </AdminLayout >
    </>
  )
}

export default Inventory;