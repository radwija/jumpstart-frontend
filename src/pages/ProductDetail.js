import React, { useState } from "react";
import { CartIcon } from "../assets/SvgIcons";
import Layout from "../components/Layout";

const ProductDetail = () => {
  const [productNumber, setProductNumber] = useState(1)
  const handleProductNumber = (e) => {
    console.log(e.target.value)
  }
  return (
    <>
      <Layout>
        <div className='py-10 sm:flex sm:flex-wrap sm:flex-col gap-y-10 md:grid md:grid-cols-12 px-5 sm:px-5 md:px-36 lg:px-20'>
          <div className='mx-5 sm:col-span-12 md:col-span-12 lg:col-span-4'>
            <div className="aspect-square border rounded">
              <img src="https://thumbs.dreamstime.com/b/vertical-panorama-country-road-9905521.jpg" alt="product thumbnail" className="object-contain w-full h-full rounded" />
            </div>
          </div>
          <div className='mx-5 sm:col-span-12 md:col-span-12 lg:col-span-5 bg-white'>
            <h1 className="text-xl font-semibold">Hot Wheels Fast and Furious Orange Nissan Skyline GT-R BNR34 R34</h1>
            <div className="text-4xl font-bold">$20</div>

            <hr className="my-3" />

            <h1 className="text-xl font-semibold">Details</h1>
            <div>Weight: 100</div>
            <div>Category: Toy</div>

            <hr className="my-3" />

            <h1 className="text-xl font-semibold">Description</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tristique et egestas quis. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Diam maecenas sed enim ut sem viverra aliquet. Ut sem nulla pharetra diam sit amet. Vitae purus faucibus ornare suspendisse sed nisi. Augue mauris augue neque gravida in fermentum et. At elementum eu facilisis sed odio morbi. Consectetur a erat nam at lectus urna. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Lacus luctus accumsan tortor posuere ac ut consequat semper. Venenatis cras sed felis eget velit aliquet sagittis. Sit amet purus gravida quis blandit turpis cursus. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Aliquam ultrices sagittis orci a. Elit eget gravida cum sociis. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Proin nibh nisl condimentum id venenatis a condimentum vitae.</p>
          </div>
          <div className='fixed bottom-0 left-0 right-0 z-10 lg:static sm:col-span-12 md:col-span-12 lg:col-span-3'>
            <div className="p-5 rounded bg-white border shadow">
              <h1 className="text-xl font-semibold">Order product</h1>
              <div className="mb-3">Stocks: 100</div>

              <div className="join w-full mb-3">
                <button className="btn join-item" onClick={() => setProductNumber((prev) => prev - 1)}>-</button>
                <input type="number" className="join-item mx-2 w-full border text-center" value={productNumber} onInput={(e) => setProductNumber(Number(e.target.value))} min={1} max={10} />
                <button className="btn join-item" onClick={() => setProductNumber((prev) => prev + 1)}>+</button>
              </div>

              <form action="">
                <input type="hidden" className="join-item mx-2 w-full border text-center" value={productNumber} />
                <div className="flex justify-between mb-3">
                  <div>Total:</div>
                  <div className="text-xl font-semibold">${productNumber * 20}</div>
                </div>
                <button type="submit" className="btn btn-primary w-full"><CartIcon /> Add to cart</button>
              </form>
            </div>
          </div>
        </div >
      </Layout >
    </>
  )
}

export default ProductDetail;