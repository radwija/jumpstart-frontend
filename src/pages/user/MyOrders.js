import React from 'react'
import UserLayout from '../../components/user/layout/UserLayout';
import { PageHeading } from '../../components/PageHeading';
import { Link } from 'react-router-dom';
import { OrderCard } from '../../components/OrderCard';

const MyOrders = () => {
  return (
    <UserLayout>
      <PageHeading headingTitle='Order history' />
      <ul className='flex gap-3 mb-2'>
        <li><Link className='btn btn-outline btn-primary btn-sm'>All orders</Link></li>
        <li><Link className='btn btn-outline btn-primary btn-sm'>Processed</Link></li>
        <li><Link className='btn btn-outline btn-primary btn-sm'>Completed</Link></li>
        <li><Link className='btn btn-outline btn-primary btn-sm'>Cancelled</Link></li>
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