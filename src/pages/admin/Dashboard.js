import React, { useEffect } from 'react'
import { AdminSidebar } from '../../components/admin/header/AdminSidebar'
import AdminLayout from '../../components/admin/layout/AdminLayout'
import { PageHeading } from '../../components/PageHeading'
import { Stat } from '../../components/Stat'
import useDocumentTitle from '../useDocumentTitle'
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit'
import { useNavigate } from 'react-router-dom'
import { useRedirectUser } from '../../hooks/redirectUser'

const Dashboard = () => {
  useDocumentTitle('Admin Dashboard')

  const auth = useAuthUser();
  const role = auth()?.role?.[0]
  const email = auth()?.email
  const token = auth()?.token
  const isLogin = useIsAuthenticated()
  const isAdmin = isLogin() && role === "ROLE_ADMIN"
  const navigate = useNavigate()
  const redirectUser = useRedirectUser()

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