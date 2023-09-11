import React, { useEffect, useState } from 'react'
import { AdminSidebar } from '../header/AdminSidebar';
import { useWindowSize } from "@uidotdev/usehooks";
import Layout from '../../Layout';

const AdminLayout = (props) => {
  return (
    <>
      <Layout>
        <div className='py-10 flex flex-wrap flex-col sm:flex sm:flex-wrap sm:flex-col gap-y-5 sm:gap-y-5 md:gap-y-5 lg:gap-y-5 md:grid md:grid-cols-12 px-5 sm:px-5 md:px-44 lg:px-20'>
          <div className='mx-5 hidden sm:hidden md:hidden lg:block lg:col-span-3'>
            <AdminSidebar />
          </div>
          <div className='mx-5 sm:col-span-12 md:col-span-12 lg:col-span-9 bg-white'>
            <div className="border rounded p-5">
              {props.children}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default AdminLayout;