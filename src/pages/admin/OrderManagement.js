import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/admin/layout/AdminLayout'
import { PageHeading } from '../../components/PageHeading'
import useDocumentTitle from '../useDocumentTitle'
import { CheckIcon, CrossIcon, EyeIcon } from '../../assets/SvgIcons'
import { Link, useNavigate } from 'react-router-dom'
import { AdminTable } from '../../components/AdminTable'
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit'
import { useRedirectUser } from '../../hooks/redirectUser'
import { ConfirmWindow } from '../../components/ConfirmWindow'
import { getOrdersApi } from '../../api/admin-api'
import { detailFormatDate } from '../../utils/utils'

const OrderManagement = () => {
  useDocumentTitle('Order Management')
  const queryParameters = new URLSearchParams(window.location.search)
  const filter = queryParameters.get("filter")

  const auth = useAuthUser();
  const role = auth()?.role?.[0]
  const email = auth()?.email
  const token = auth()?.token
  const isLogin = useIsAuthenticated()
  const isAdmin = isLogin() && role === "ROLE_ADMIN"
  const navigate = useNavigate()
  const redirectUser = useRedirectUser()

  const [orders, setOrders] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
    getOrdersApi(token, filter)
      .then(res => {
        setOrders(res.data.result.orders)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, [filter])

  const orderManagementNavigation = [
    {
      name: "All orders",
      path: "/admin/orders"
    },
    {
      name: "Pending",
      path: "/admin/orders?filter=pending"
    },
    {
      name: "Completed",
      path: "/admin/orders?filter=completed"
    },
    {
      name: "Cancelled",
      path: "/admin/orders?filter=cancelled"
    },
  ]

  return (
    <>
      <AdminLayout>
        <PageHeading headingTitle='Order Management' />
        <div className='overflow-x-auto mb-5'>
          <div className='flex gap-3'>
            {orderManagementNavigation.map((link) => (
              <Link to={link.path} key={link.name} className={`btn btn-outline btn-primary`}>{link.name}</Link>
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
            {orders.map((order) => (
              <tr key={order.orderId}>
                <td>{order.orderId}</td>
                <td>Customer Name</td>
                <td>{detailFormatDate(order.createdAt)}</td>
                <td>{order.status}</td>
                <td>{order.total}</td>
                <td className='flex gap-3'>
                  <Link className='btn btn-neutral'><EyeIcon /></Link>

                  <ConfirmWindow
                    elementId={`confirm-${order.orderId}`}
                    buttonClass="btn btn-primary"
                    confirmButtonText="Complete product"
                    message={`Are you sure to complete order ID: ${order.orderId}?`}
                    // name={order.productName}
                    // action={() => handleDeleteProduct(product.productId)}
                    icon={<CheckIcon />}
                  />

                  <ConfirmWindow
                    elementId={`confirm-${order.orderId}`}
                    buttonClass="btn btn-error"
                    confirmButtonText="Yes, delete product"
                    message={`Are you sure to cancel order ID: ${order.orderId}?`}
                    productName={"order.productName"}
                    // action={() => handleDeleteProduct(product.productId)}
                    icon={<CrossIcon />}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </AdminTable>
      </AdminLayout >
    </>
  )
}

export default OrderManagement;