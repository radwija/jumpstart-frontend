import React from "react";
import forgot_password from '../assets/images/forgot_password.svg'
import { AlertMessage } from "../components/AlertMessage";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const FindAccountForm = () => {
  return (
    <div className="p-5 rounded bg-white border shadow">
      <h1 className="text-4xl font-semibold mb-2">Find your account</h1>
      {/* <AlertMessage messageType='error' message='Bro' /> */}
      <form action="" className="grid gap-y-3 mb-4">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" className="input input-bordered w-full" />
        </div>
        <button type="submit" className="btn btn-primary w-full">Login</button>
      </form>
      <hr />
      <p className="text-center mt-4">Already have an account? <Link to="">Login</Link></p>
    </div>
  );
}

const ForgottenPassword = () => {
  return (
    <>
      <Layout>
        <div className='py-10 sm:flex sm:flex-wrap sm:flex-col md:grid md:grid-cols-12 p-5 '>
          <div className='lg:px-20 md:px-8 py-5 sm:col-span-12 md:col-span-6 hidden sm:hidden md:block lg:block'>
            <img src={forgot_password} alt="Forgotten password illustration" />
          </div>
          <div className='lg:px-20 md:px-8 py-5 sm:col-span-12 md:col-span-6'>
            <FindAccountForm />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ForgottenPassword;