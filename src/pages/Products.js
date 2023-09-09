import React from 'react'
import ProductCard from '../components/ProductCard';
import Layout from '../components/Layout';

const Products = () => {
  return (
    <>
      <Layout>
        <div className='py-10 flex flex-wrap flex-col sm:flex sm:flex-wrap sm:flex-col gap-y-5 sm:gap-y-5 md:gap-y-5 lg:gap-y-5 md:grid md:grid-cols-12 px-5 sm:px-5 md:px-36 lg:px-20'>
          <div className='mx-5 sm:col-span-12 md:col-span-12 lg:col-span-3'>
            <h1 className="text-lg font-semibold mb-2">Filter</h1>
            <div className="border rounded p-5">
              <form action="" className='flex sm:flex md:flex-col lg:flex-col gap-3'>
                <select className="select select-bordered max-w-xs sm:w-full sm:max-w-xs md:w-full md:max-w-xs lg:w-full lg:max-w-xs">
                  <option disabled selected>Category</option>
                  <option>Toy</option>
                  <option>Electronic</option>
                </select>
                <div className="form-control sm:w-full md:w-full lg:w-full">
                  <label className="label hidden sm:hidden md:block lg:block">
                    <span className="label-text">Min price</span>
                  </label>
                  <input type="number" placeholder="Min price" className="input input-bordered w-40 sm:w-full md:w-full lg:w-full" />
                </div>
                <div className="form-control sm:w-full md:w-full lg:w-full">
                  <label className="label hidden sm:hidden md:block lg:block">
                    <span className="label-text">Max price</span>
                  </label>
                  <input type="number" placeholder="Max price" className="input input-bordered w-40 sm:w-full md:w-full lg:w-full" />
                </div>
              </form>
            </div>
          </div>
          <div className='mx-5 sm:col-span-12 md:col-span-12 lg:col-span-9 bg-white'>
            <div className='grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-9 gap-5'>
              <div className='col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-3'>
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Products;