import React, { useEffect } from 'react'
import AdminLayout from '../../components/admin/layout/AdminLayout'
import { PageHeading } from '../../components/PageHeading'
import useDocumentTitle from '../useDocumentTitle'
import { EditIcon, EyeIcon, TrashIcon } from '../../assets/SvgIcons'
import { Link, useNavigate } from 'react-router-dom'
import { AdminTable } from '../../components/AdminTable'
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit'
import { useRedirectUser } from '../../hooks/redirectUser'

const Inventory = () => {
  useDocumentTitle('Inventory')

  const auth = useAuthUser();
  const role = auth()?.role?.[0]
  const email = auth()?.email
  const token = auth()?.token
  const isLogin = useIsAuthenticated()
  const isAdmin = isLogin() && role === "ROLE_ADMIN"
  const navigate = useNavigate()
  const redirectUser = useRedirectUser()

  const inventoryNavigation =
    [
      {
        name: "+ Add product",
        path: "/admin/add-product"
      },
      {
        name: "Create category",
        path: "/admin/create-category"
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
              <td>1</td>
              <td>Product Name</td>
              <td>Category</td>
              <td>200</td>
              <td>$20</td>
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