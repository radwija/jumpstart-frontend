import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { PageHeading } from '../../components/PageHeading'
import { ItemCard } from '../../components/ItemCard'
import useDocumentTitle from '../useDocumentTitle'
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit'
import { useRedirectUser } from '../../hooks/redirectUser'
import { useNavigate } from 'react-router-dom'
import { getMyCart, getMyCartApi } from '../../api/user-api'

export const MyCart = () => {
  useDocumentTitle("My Shopping Cart")

  const auth = useAuthUser();
  const role = auth()?.role?.[0]
  const email = auth()?.email
  const token = auth()?.token
  const isLogin = useIsAuthenticated()
  const isAdmin = isLogin() && role === "ROLE_ADMIN"
  const navigate = useNavigate()
  const redirectUser = useRedirectUser()

  const [cart, setCart] = useState({})
  const [cartItems, setCartItems] = useState([])
  const [itemNumbers, setItemNumbers] = useState(0)

  useEffect(() => {
    if (isLogin() && isAdmin) {
      redirectUser(role)
    }
  })

  useEffect(() => {
    window.scrollTo(0, 0)
    getMyCartApi(token)
      .then(res => {
        setCart(res.data.result)
        setCartItems(res.data.result.cartItems)
      })
      .catch(error => {
        console.log(error)
      })
  }, [token])

  return (
    <>
      <Layout>
        <div className='py-10 flex flex-wrap flex-col sm:flex sm:flex-wrap sm:flex-col gap-y-5 sm:gap-y-5 md:gap-y-5 lg:gap-y-5 md:grid md:grid-cols-12 px-5 sm:px-5 md:px-44 lg:px-20'>
          <div className='mx-5 col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-9 bg-white'>
            <PageHeading headingTitle='My shopping cart' />
            <div className='flex flex-col gap-5'>
              {cartItems.map((item) => (
                <ItemCard
                  key={item.itemId}
                  product={item.product}
                  itemId={item.itemId}
                  productName={item.product.productName}
                  slug={item.product.slug}
                  categoryName={item.product.category.categoryName}
                  quantity={item.quantity}
                  price={item.product.price}
                  itemPriceTotal={item.itemPriceTotal}
                />
              ))}
            </div>
          </div>
          <div className='mx-5 col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-3'>
            <div className="fixed bottom-0 left-0 right-0 z-10 lg:static bg-white flex flex-col gap-3 border shadow rounded px-10 lg:px-5 py-5">
              <div className='text-lg font-semibold'>Order summary</div>
              {cart && cart.total !== undefined ? (
                <>
                  <div>Total items: {cart.itemNumbers}</div>
                  <div>Total amount: ${cart.total?.toLocaleString("en-US")}</div>
                </>
              ) : (
                <div>Loading...</div>
              )}
              <button className='btn btn-primary w-full'>Checkout</button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
