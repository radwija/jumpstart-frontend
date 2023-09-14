import React from 'react'
import Layout from '../components/Layout';
import { PageHeading } from '../components/PageHeading';
import not_found from '../assets/images/not_found.svg'
import { Link } from 'react-router-dom';
import useDocumentTitle from './useDocumentTitle';

const NotFound = () => {
  useDocumentTitle("Not Found")
  return (
    <>
      <Layout>
        <div className='py-10 px-10 sm:px-10 md:px-40 lg:px-72'>
          <div className='text-center'>
            <PageHeading headingTitle="404 Not Found" />
            <Link to={'/'} className='btn btn-primary'>Go to home</Link>
            <img src={not_found} alt="not found illustration" />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default NotFound;