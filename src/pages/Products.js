import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import Layout from '../components/Layout';
import useDocumentTitle from './useDocumentTitle';
import { showAllProductsApi } from '../api/public-api';

const Products = () => {
  useDocumentTitle("Products")

  const [products, setProducts] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
    showAllProductsApi()
      .then(res => {
        setProducts(res.data.result)
      })
      .catch(error => {
        if (error.response && error.response.data) {
          console.log(error.response.data)
        } else {
          return "No respon from server"
        }
      })
  }, [])
  return (
    <>
      <Layout>
        <div className='py-10 grid grid-cols-12 px-5 sm:px-5 md:px-5 lg:px-20'>
          <div className='mx-5 col-span-12 sm:col-span-12 md:col-span-12 lg:block lg:col-span-3'>
            <h1 className="text-lg font-semibold mb-2">Filter</h1>
            <div className='border shadow rounded p-5 overflow-x-auto'>
              <form action="" className='flex sm:flex md:flex lg:flex-col gap-3'>
                <select className="select select-bordered max-w-xs sm:w-full sm:max-w-xs md:w-full md:max-w-xs lg:w-full lg:max-w-xs">
                  <option disabled selected>Category</option>
                  <option>Toy</option>
                  <option>Electronic</option>
                </select>
                <div className="form-control sm:w-full md:w-full lg:w-full">
                  <label className="label hidden sm:hidden md:hidden lg:block">
                    <span className="label-text">Min price</span>
                  </label>
                  <input type="number" placeholder="Min price" className="input input-bordered w-40 sm:w-full md:w-full lg:w-full" />
                </div>
                <div className="form-control sm:w-full md:w-full lg:w-full">
                  <label className="label hidden sm:hidden md:hidden lg:block">
                    <span className="label-text">Max price</span>
                  </label>
                  <input type="number" placeholder="Max price" className="input input-bordered w-40 sm:w-full md:w-full lg:w-full" />
                </div>
              </form>
            </div>
          </div>
          <div className='mx-5 col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-9 bg-white'>
            <div className='lg:hidden overflow-x-auto mb-5'>
              <div className='flex gap-3'>

              </div>
            </div>
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-5'>
              {products.map((product) => (
                <ProductCard
                  key={product.productId}
                  productId={product.productId}
                  slug={product.slug}
                  productName={product.productName}
                  category={product.category}
                  price={product.price}
                />
              )
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Products;