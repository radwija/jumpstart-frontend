import React from "react";
import login from '../assets/images/login.svg'

const Login = () => {
  return (
    <>
      <div className='my-20 sm:flex sm:flex-wrap sm:flex-col md:grid md:grid-cols-12 p-5 '>
        <div className='lg:px-20 md:px-8 py-5 sm:col-span-12 md:col-span-6'>
          <img src={login} alt="Login illustration" />
        </div>
        <div className='lg:px-20 md:px-8 py-5 sm:col-span-12 md:col-span-6'>
          <div className="p-5 rounded bg-white shadow-lg">
            <h1 className="text-4xl font-semibold mb-2">Login</h1>
            {/* <div className="alert alert-error">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Error! Task failed successfully.</span>
            </div> */}
            <form action="" className="grid gap-y-3">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Type here" className="input input-bordered w-full" />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Type here" className="input input-bordered w-full" />
                <label className="label">
                  <span className="label-text-alt">
                    <a href="">Forgot password?</a>
                  </span>
                </label>
              </div>
              <button type="submit" className="btn btn-primary w-full">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;