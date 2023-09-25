import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { date } from 'yup';

const Product = ({
  slug,
  productName,
  quantity,
  price
}) => {
  return (
    <div div className='flex gap-3' >
      <Link to={`/p/snapshot/${slug}`} className='aspect-square border rounded'>
        <img src="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" className='object-contain w-20 h-20  rounded' />
      </Link>
      <div>
        <Link to={`/p/snapshot/`} className='text-lg font-medium'>{productName}</Link>
        <div>{quantity} * ${price} = ${quantity * price}</div>
        <div></div>
      </div>
    </div >
  );
}

export const OrderCard = ({
  orderId,
  status,
  date,
  total,
  productSnapshots
}) => {

  const [snapshots, setSnapshots] = useState([])

  useEffect(() => {
    setSnapshots(productSnapshots)
  }, [productSnapshots])

  console.log(snapshots)
  const handleStatusClass = (status) => {
    let color = ""
    switch (status) {
      case "PENDING":
        color = "yellow-500"
        break
      case "COMPLETED":
        color = "green-500"
        break
      case "CANCELLED":
        color = "red-500"
        break
      default:
        color = "black"
        break
    }
    return {
      status: status,
      color: color
    }
  }




  return (
    <>
      <div className='p-4 bg-white border rounded shadow'>
        <div className='mb-3'>
          <div className='text-lg font-semibold'>Order ID: {orderId}</div>
          <div>{date} |
            <span className={`font-semibold text-${handleStatusClass(status).color}`}> {handleStatusClass(status).status}</span>
          </div>
        </div>
        <div className='flex flex-col gap-4 mb-3'>
          {snapshots && snapshots.map((snapshot) => (
            <Product
              key={snapshot.id}
              slug={snapshot.slug}
              productName={snapshot.productName}
              quantity={snapshot.quantity}
              price={snapshot.price}
            />
          ))}
        </div>

        <div>Total amount:</div>
        <div className='text-3xl font-semibold text-primary'>${total}</div>
      </div>
    </>
  )
}
