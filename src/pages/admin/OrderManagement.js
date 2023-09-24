import React, { useEffect } from 'react'
import AdminLayout from '../../components/admin/layout/AdminLayout'
import { PageHeading } from '../../components/PageHeading'
import useDocumentTitle from '../useDocumentTitle'
import { CheckIcon, CrossIcon, EyeIcon } from '../../assets/SvgIcons'
import { Link, useNavigate } from 'react-router-dom'
import { AdminTable } from '../../components/AdminTable'
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit'
import { useRedirectUser } from '../../hooks/redirectUser'
import { ConfirmWindow } from '../../components/ConfirmWindow'

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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
                <Link className='btn btn-neutral'><EyeIcon /></Link>

                <ConfirmWindow
                  elementId={`confirm-{order.product}`}
                  buttonClass="btn btn-primary"
                  confirmButtonText="Complete product"
                  message={`Are you sure to complete order ID: {order.productId}?`}
                  name={"order.productName"}
                  // action={() => handleDeleteProduct(product.productId)}
                  icon={<CheckIcon />}
                />

                <ConfirmWindow
                  elementId={`confirm-{order.productId}`}
                  buttonClass="btn btn-error"
                  confirmButtonText="Yes, delete product"
                  message={`Are you sure to cancel order ID: {order.productId}?`}
                  productName={"order.productName"}
                  // action={() => handleDeleteProduct(product.productId)}
                  icon={<CrossIcon />}
                />
              </td>
            </tr>
          </tbody>
        </AdminTable>
      </AdminLayout >
    </>
  )
}

export default OrderManagement;