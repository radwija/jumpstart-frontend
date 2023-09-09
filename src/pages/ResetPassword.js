import React from "react";
import reset_password from '../assets/images/reset_password.svg'
import { AlertMessage } from "../components/AlertMessage";
import { Link } from "react-router-dom";
import useDocumentTitle from "./useDocumentTitle";
import Layout from "../components/Layout";

const ResetPasswordForm = () => {
  useDocumentTitle(`Reset Password`);
  return (
    <div className="p-5 rounded bg-white border shadow">
      <h1 className="text-4xl font-semibold mb-2">Reset password</h1>
      {/* <AlertMessage messageType='error' message='Bro' /> */}
      <form action="" className="grid gap-y-3 mb-4">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">New password</span>
          </label>
          <input type="password" placeholder="New password" className="input input-bordered w-full" />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Confirm new password</span>
          </label>
          <input type="password" placeholder="Confirm new password" className="input input-bordered w-full" />
        </div>
        <button type="submit" className="btn btn-primary w-full">Reset password</button>
      </form>
      <hr />
      <p className="text-center mt-4">Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

const ResetPassword = () => {
  return (
    <>
      <Layout>
        <div className='py-10 sm:flex sm:flex-wrap sm:flex-col md:grid md:grid-cols-12 p-5 '>
          <div className='lg:px-20 md:px-8 py-5 sm:col-span-12 md:col-span-6 hidden sm:hidden md:block lg:block'>
            <img src={reset_password} alt="Reset password illustration" />
          </div>
          <div className='lg:px-20 md:px-8 py-5 sm:col-span-12 md:col-span-6'>
            <ResetPasswordForm />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ResetPassword;