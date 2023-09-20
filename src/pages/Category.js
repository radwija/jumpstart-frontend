import React from 'react'
import Layout from '../components/Layout'
import { PageHeading } from '../components/PageHeading'
import { PlainCategoryCard } from '../components/PlainCategoryCard'
import useDocumentTitle from './useDocumentTitle'

const Category = () => {
  useDocumentTitle("Category")
  return (
    <>
      <Layout>
        <div className='py-10 px-10 px-5 sm:px-5 md:px-5 lg:px-20'>
          <PageHeading headingTitle="Category" />
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 xl:gap-5">
            <PlainCategoryCard name='Toys' amount='20' />
            <PlainCategoryCard name='Sports' amount='20' />
            <PlainCategoryCard name='Kitchen' amount='20' />
            <PlainCategoryCard name='Fashion' amount='20' />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Category