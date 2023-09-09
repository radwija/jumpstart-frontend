import React from "react";
import login from '../assets/images/login.svg'
import { AlertMessage } from "../components/AlertMessage";

const LoginForm = () => {
  return (
    <div className="p-5 rounded bg-white border shadow">
      <h1 className="text-4xl font-semibold mb-2">Login</h1>
      {/* <AlertMessage /> */}
      <form action="" className="grid gap-y-3">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" className="input input-bordered w-full" />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" className="input input-bordered w-full" />
          <label className="label">
            <span className="label-text-alt">
              <a href="">Forgotten password?</a>
            </span>
          </label>
        </div>
        <button type="submit" className="btn btn-primary w-full">Login</button>
      </form>
    </div>
  );
}

const Login = () => {
  return (
    <>
      <div className='py-10 sm:flex sm:flex-wrap sm:flex-col md:grid md:grid-cols-12 p-5 '>
        <div className='lg:px-20 md:px-8 py-5 sm:col-span-12 md:col-span-6 hidden sm:hidden md:block lg:block'>
          <img src={login} alt="Login illustration" />
        </div>
        <div className='lg:px-20 md:px-8 py-5 sm:col-span-12 md:col-span-6'>
          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default Login;