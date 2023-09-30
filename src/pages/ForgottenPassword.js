import React, { useEffect, useState } from "react";
import forgot_password from '../assets/images/forgot_password.svg'
import { AlertMessage } from "../components/AlertMessage";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import useDocumentTitle from "./useDocumentTitle";
import { PageHeading } from "../components/PageHeading";
import { findAccountApi } from "../api/auth-api";
import { useFormik } from "formik";
import * as Yup from "yup"

const FindAccountForm = () => {
  const [alertMessage, setAlertMessage] = useState(null)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const formik = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Please input your email")
    }),
    onSubmit: async (values) => {
      console.log({ values })
      findAccountApi(values)
        .then(res => {
          setAlertMessage(
            {
              messageType: "success",
              message: res.data.message
            }
          )
        })
        .catch(error => {
          if (error?.response?.data) {
            // error message from backend
            setAlertMessage(
              {
                messageType: "error",
                message: error?.response?.data.message
              }
            )
          } else if (error) {
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
        })
    }
  })

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } = formik

  return (
    <div className="p-5 rounded bg-white border shadow">
      <PageHeading headingTitle="Find your account" />
      {
        alertMessage &&
        <AlertMessage messageType={alertMessage.messageType} message={alertMessage.message} />
      }
      <form onSubmit={handleSubmit} className="grid gap-y-3 mb-4">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="input input-bordered w-full"
          />
          {errors.email && touched.email &&
            <label className="label">
              <span className="label-text-alt text-red-600">{errors.email}</span>
            </label>
          }
        </div>
        <button type="submit" className="btn btn-primary w-full">Login</button>
      </form>
      <hr />
      <p className="text-center mt-4">Already have an account? <Link to="">Login</Link></p>
    </div>
  );
}

const ForgottenPassword = () => {
  useDocumentTitle(`Find Your Account`);
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