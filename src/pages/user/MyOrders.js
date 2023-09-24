import React, { useEffect } from 'react'
import UserLayout from '../../components/user/layout/UserLayout';
import { PageHeading } from '../../components/PageHeading';
import { Link, useNavigate } from 'react-router-dom';
import { OrderCard } from '../../components/OrderCard';
import useDocumentTitle from '../useDocumentTitle';
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit';
import { useRedirectUser } from '../../hooks/redirectUser';

const MyOrders = () => {
  useDocumentTitle("Order History")

  const auth = useAuthUser();
  const role = auth()?.role?.[0]
  const email = auth()?.email
  const token = auth()?.token
  const isLogin = useIsAuthenticated()
  const isAdmin = isLogin() && role === "ROLE_ADMIN"
  const navigate = useNavigate()
  const redirectUser = useRedirectUser()

  useEffect(() => {
    window.scrollTo(0, 0)
    if (isLogin() && isAdmin) {
      redirectUser(role)
    }
  })

  return (
    <UserLayout>
      <PageHeading headingTitle='Order history' />
      <ul className='flex gap-3 overflow-x-auto mb-2'>
        <li><Link className='btn btn-outline btn-primary'>All orders</Link></li>
        <li><Link className='btn btn-outline btn-primary'>Processed</Link></li>
        <li><Link className='btn btn-outline btn-primary'>Completed</Link></li>
        <li><Link className='btn btn-outline btn-primary'>Cancelled</Link></li>
      </ul>
      <div className='flex flex-col gap-4'>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </UserLayout>
  )
}

export default MyOrders;