import React from 'react'
import Layout from '../../components/Layout'
import { PageHeading } from '../../components/PageHeading'
import { ItemCard } from '../../components/ItemCard'

export const MyCart = () => {
  return (
    <>
      <Layout>
        <div className='py-10 flex flex-wrap flex-col sm:flex sm:flex-wrap sm:flex-col gap-y-5 sm:gap-y-5 md:gap-y-5 lg:gap-y-5 md:grid md:grid-cols-12 px-5 sm:px-5 md:px-44 lg:px-20'>
          <div className='mx-5 col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-9 bg-white'>
            <PageHeading headingTitle='My shopping cart' />
            <div className='flex flex-col gap-5'>
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </div>
          </div>
          <div className='mx-5 col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-3'>
            <div className="flex flex-col gap-3 border shadow rounded p-5">
              <div className='text-lg font-semibold'>Order summary</div>
              <div>
                <div>Total items: 2</div>
                <div>Total amount: $40</div>
              </div>
              <button className='btn btn-primary w-full'>Checkout</button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
