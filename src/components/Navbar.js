import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthUser, useIsAuthenticated, useSignOut } from 'react-auth-kit';
import { getMyCartApi } from '../api/user-api';

export const Navbar = () => {
  const auth = useAuthUser();
  const role = auth()?.role?.[0]
  const isLogin = useIsAuthenticated()
  const token = auth()?.token
  const isAdmin = isLogin() && role === "ROLE_ADMIN"
  const signOut = useSignOut();
  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut()
    navigate("/")
  }

  const [cart, setCart] = useState({})
  const [itemNumbers, setItemNumbers] = useState(cart.itemNumbers)
  useEffect(() => {
    getMyCartApi(token)
      .then(res => {
        setCart(res.data.result)
      })
      .catch(error => {
        console.log(error)
      })
  }, [token])

  return (
    <div className="fixed z-20 navbar bg-base-100 shadow">
      <div className="flex-1">
        <Link to={'/'} className="btn btn-ghost text-xl">
          <img src={logo} alt="Jumpstart Logo" style={{ height: "30px" }} /> <span className='hidden sm:hidden md:block lg:block'>Jumpstart</span>
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className='hidden sm:hidden md:flex lg:flex gap-2'>
          <Link to={'/products'} className='btn btn-ghost drawer-button font-normal'>Products</Link>
          <Link to={'/category'} className='btn btn-ghost drawer-button font-normal'>Category</Link>
        </div>
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered md:w-auto" />
        </div>
        {!isLogin() ?
          (
            <div className='flex gap-2'>
              <Link to={'/login'} className='btn btn-primary '>Login</Link>
              <Link to={'/register'} className='btn btn-outline btn-primary'>Register</Link>
            </div>
          ) :
          (
            <>
              {!isAdmin &&
                (
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                      <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge badge-sm indicator-item">{cart.itemNumbers}</span>
                      </div>
                    </label>
                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                      <div className="card-body">
                        <span className="font-bold text-lg">{cart.itemNumbers} Items</span>
                        {cart && cart.total !== undefined ? (
                          <span>Subtotal: ${cart.total.toLocaleString("en-US")}</span>
                        ) : (
                          <div>Loading...</div>
                        )}

                        <div className="card-actions">
                          <Link to={'/my-cart'} className="btn btn-primary btn-block">View cart</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }

              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://i1.sndcdn.com/artworks-000139163741-dk8qn7-t500x500.jpg" alt='user avatar' />
                  </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <Link to={'/user/profile'} className="justify-between">Profile</Link>
                  </li>

                  {isAdmin &&
                    <li>
                      <Link to={'/admin'} className="justify-between">Admin Dashboard</Link>
                    </li>
                  }

                  {!isAdmin &&
                    <li>
                      <Link to={'/user/orders'} className="justify-between">Orders</Link>
                    </li>
                  }
                  {!isAdmin &&
                    <li>
                      <Link to={'/my-cart'} className="justify-between">Shopping Cart</Link>
                    </li>
                  }
                  <li>
                    <button onClick={() => handleSignOut()} className="justify-between">Log Out</button>
                  </li>
                </ul>
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}