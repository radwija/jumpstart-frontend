import React from "react";
import { CartIcon } from "../assets/SvgIcons";

const ProductDetail = () => {
  function handleWheel(event) {
    event.preventDefault();
  }

  return (
    <>
      <div className='py-10 sm:flex sm:flex-wrap sm:flex-col md:grid md:grid-cols-12 px-5 sm:px-5 md:px-5 lg:px-20'>
        <div className='mx-5 sm:col-span-12 md:col-span-4'>
          <div className="w-full aspect-square">
            <img src="https://thumbs.dreamstime.com/b/vertical-panorama-country-road-9905521.jpg" alt="product thumbnail" className="object-cover w-full h-full rounded" />
          </div>
        </div>
        <div className='mx-5 sm:col-span-12 md:col-span-5 bg-white'>
          <h1 className="text-xl font-semibold">Hot Wheels Fast and Furious Orange Nissan Skyline GT-R BNR34 R34</h1>
          <div className="text-4xl font-bold">$20</div>

          <hr className="my-3" />

          <h1 className="text-xl font-semibold">Details</h1>
          <div>Weight: 100</div>
          <div>Category: Toy</div>

          <hr className="my-3" />

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tristique et egestas quis. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Diam maecenas sed enim ut sem viverra aliquet. Ut sem nulla pharetra diam sit amet. Vitae purus faucibus ornare suspendisse sed nisi. Augue mauris augue neque gravida in fermentum et. At elementum eu facilisis sed odio morbi. Consectetur a erat nam at lectus urna. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Lacus luctus accumsan tortor posuere ac ut consequat semper. Venenatis cras sed felis eget velit aliquet sagittis. Sit amet purus gravida quis blandit turpis cursus. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Aliquam ultrices sagittis orci a. Elit eget gravida cum sociis. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Proin nibh nisl condimentum id venenatis a condimentum vitae.</p>
        </div>
        <div className='sm:col-span-12 md:col-span-3'>
          <div className="p-5 rounded bg-white shadow">
            <h1 className="text-xl font-semibold">Order product</h1>
            <div className="mb-3">Stocks: 100</div>

            <form action="">
              <div className="join mb-3">
                <button className="btn join-item">-</button>
                <input type="number" className="join-item w-28 mx-2 border text-center" value={1} min={1} max={100} />
                <button className="btn join-item">+</button>
              </div>
              <div className="flex justify-between mb-3">
                <div>Total:</div>
                <div className="text-xl font-semibold">$20</div>
              </div>
              <button type="submit" className="btn btn-primary w-full"><CartIcon /> Add to cart</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail;