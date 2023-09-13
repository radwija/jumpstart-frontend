import React from 'react'
import { AdminSidebar } from '../../components/admin/header/AdminSidebar'
import AdminLayout from '../../components/admin/layout/AdminLayout'
import { PageHeading } from '../../components/PageHeading'
import { Stat } from '../../components/Stat'
import useDocumentTitle from '../useDocumentTitle'

const Dashboard = () => {
  useDocumentTitle('Admin Dashboard')
  return (
    <>
      <AdminLayout>
        <PageHeading headingTitle='Admin Dashboard' />
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 xl:gap-5">
          <Stat name='Revenue' amount='20' />
          <Stat name='Revenue' amount='20' />
          <Stat name='Revenue' amount='20' />
          <Stat name='Revenue' amount='20' />
        </div>
      </AdminLayout>
    </>
  )
}

export default Dashboard;