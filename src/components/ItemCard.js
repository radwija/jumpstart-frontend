import React, { useState } from 'react'
import { CategoryBadge } from './CategoryBadge'
import { TrashIcon } from '../assets/SvgIcons'
import { Link, useNavigate } from 'react-router-dom'
import { deleteCartItemByIdApi } from '../api/user-api'
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit'

export const ItemCard = (props) => {
  const auth = useAuthUser();
  const role = auth()?.role?.[0]
  const email = auth()?.email
  const token = auth()?.token
  const isLogin = useIsAuthenticated()
  const isAdmin = isLogin() && role === "ROLE_ADMIN"
  const navigate = useNavigate()

  const [alertMessage, setAlertMessage] = useState(null)

  const handleDeleteCartItem = (itemId) => {
    deleteCartItemByIdApi(token, itemId)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        if (typeof error === "string") {
          console.log("Error message: " + error)
        } else {
          if (error?.response?.data) {
            // error message from backend
            setAlertMessage(
              {
                messageType: "error",
                message: error?.response?.data.message
              }
            )
          } else if (error) {
            // error message from client
            setAlertMessage(
              {
                messageType: "error",
                message: error.message
              }
            )
          } else {
            setAlertMessage(
              {
                messageType: "error",
                message: "No response from server"
              }
            )
          }
          setTimeout(() => {
            setAlertMessage(null)
          }, 3000)
        }
      })
  }

  return (
    <>
      <div className='flex flex-col gap-4 rounded border p-5'>
        <div className='flex gap-4'>
          <div className="w-20 h-20 aspect-square bg-white border rounded overflow-hidden">
            <Link to={`/p/${props.slug}`}>
              <img className="object-contain w-full h-full" src="https://media.gettyimages.com/id/1290195876/photo/smartphone-in-female-hands-taking-photo-isolated-on-white-background.jpg?s=612x612&w=gi&k=20&c=BxAh7CzDecHZsibLq7yHRi7zH8VLyo4zn0MmzvboVg4=" alt="" />
            </Link>
          </div>
          <div>
            <Link to={`/p/${props.slug}`} className="font-bold text-lg"><div>{props.productName}</div></Link>
            <CategoryBadge categoryName={props.categoryName} />
            <div className="">Price: ${props.price.toLocaleString("en-US")}</div>
            <div className="">Qty: ${props.quantity}</div>
            <div className="font-semibold text-lg">Total Price: ${props.itemPriceTotal.toLocaleString("en-US")}</div>
          </div>
        </div>
        <div className='flex items-center gap-4 justify-end'>
          <button
            type='button'
            onClick={() => handleDeleteCartItem(props.itemId)}
            className='text-gray-500'>
            <TrashIcon />
          </button>
          <div className="join">
            <button className="btn join-item">-</button>
            <input type="number" className="join-item mx-2 w-20 border text-center" min={1} max={10} />
            <button className="btn join-item">+</button>
          </div>
        </div>
      </div >
    </>
  )
}
