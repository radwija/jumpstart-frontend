import React from "react";
import register from '../assets/images/register.svg'
import { AlertMessage } from "../components/AlertMessage";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import useDocumentTitle from "./useDocumentTitle";

const RegistrationForm = () => {
  useDocumentTitle(`Register`);
  return (
    <div className="p-5 rounded bg-white border shadow">
      <h1 className="text-4xl font-semibold mb-2">Register</h1>
      {/* <AlertMessage /> */}
      <form action="" className="grid gap-y-3 mb-4">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">First name</span>
          </label>
          <input type="text" placeholder="First name" className="input input-bordered w-full" />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Last name</span>
          </label>
          <input type="text" placeholder="Last name" className="input input-bordered w-full" />
        </div>
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
        </div>
        <button type="submit" className="btn btn-primary w-full">Register</button>
      </form>
      <hr />
      <p className="text-center mt-4">Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

const Registration = () => {
  return (
    <>
      <Layout>
        <div className='py-10 sm:flex sm:flex-wrap sm:flex-col md:grid md:grid-cols-12 p-5 '>
          <div className='lg:px-20 md:px-8 py-5 sm:col-span-12 md:col-span-6 hidden sm:hidden md:block lg:block'>
            <img src={register} alt="Registration illustration" />
          </div>
          <div className='lg:px-20 md:px-8 py-5 sm:col-span-12 md:col-span-6'>
            <RegistrationForm />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Registration;