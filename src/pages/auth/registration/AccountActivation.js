import React, { useEffect } from 'react'
import Layout from '../../../components/Layout';
import { PageHeading } from '../../../components/PageHeading';
import not_found from '../../../assets/images/not_found.svg'
import welcome from '../../../assets/images/welcome.svg'
import { Link, useParams } from 'react-router-dom';
import useDocumentTitle from '../../useDocumentTitle';
import { accountActivationApi } from '../../../api/auth-api';

const InvalidUrl = () => {
  return (
    <>
      <PageHeading headingTitle="Invalid URL" />
      <Link to={'/'} className='btn btn-primary'>Go to home</Link>
      <img src={not_found} alt="url not found illustration" />
    </>
  )
}

const AccountActivation = () => {
  useDocumentTitle("Account Activation")
  const { uuid } = useParams();

  useEffect(() => {
    accountActivationApi(uuid)
      .then(res => {
        console.log(res)
      })
  }, [])

  return (
    <>
      <Layout>
        <div className='py-10 px-10 sm:px-10 md:px-40 lg:px-72'>
          <div className='text-center'>
            <PageHeading headingTitle="Your account successfully activated!" />
            <Link to={'/login'} className='btn btn-primary'>Login</Link>
            <img src={welcome} alt="welcome illustration" />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default AccountActivation;