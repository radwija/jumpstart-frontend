import React from 'react'
import Layout from "../components/Layout";
import useDocumentTitle from './useDocumentTitle';
import hero from '../assets/images/hero.png'
import { PageHeading } from '../components/PageHeading';
import { CategoryCard } from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  useDocumentTitle("Welcome to Jumpstart")

  return (
    <>
      <Layout>
        <div className='flex flex-col gap-10 py-10 px-5 sm:px-10 md:px-20 lg:px-20'>
          <section>
            <img src={hero} alt="Jumpstart hero" className='rounded-md' />
          </section>
          <section>
            <PageHeading headingTitle="Category" />
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3 xl:gap-5'>
              <CategoryCard to='/' img="https://cdn.pixabay.com/photo/2017/07/25/22/54/lego-2539844_1280.jpg" name='Toy' />
              <CategoryCard to='/' img="https://cdn.pixabay.com/photo/2016/11/29/06/18/apple-1867762_1280.jpg" name='Gadget' />
              <CategoryCard to='/' img="https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_1280.jpg" name='Fashion' />
              <CategoryCard to='/' img="https://media.istockphoto.com/id/1387419697/id/foto/pelari-wanita-kebugaran-berlari-di-jembatan-tepi-laut.webp?b=1&s=612x612&w=0&k=20&c=uCsC5QJyUq-vtPryxkrQ46X2IP6AK86xwPREY1Wtm2I=" name='Sports' />
            </div>
          </section>
          <section>
            <PageHeading headingTitle="Our Products" />
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-5'>
              {/* <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard /> */}
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}

export default HomePage;