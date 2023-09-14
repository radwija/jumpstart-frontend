import React from "react";
import register from '../assets/images/register.svg'
import { AlertMessage } from "../components/AlertMessage";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import useDocumentTitle from "./useDocumentTitle";
import { useFormik } from "formik";
import axios from "../api/axios";

const RegistrationForm = () => {
  useDocumentTitle(`Register`);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },
    onSubmit: async (values) => {
      try {
        const formData = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password
        }
        await axios.post("/api/auth/register", formData)
          .then(res => {
            alert("Registration done successfully!")
          })
      }
      catch (error) {
        if (error?.response?.data) {
          // error message from backend
          alert("Error 1: " + error?.response?.data.message);
        } else if (error) {
          // error message from client
          alert("Error 2:" + error.message);
        } else {
          alert("No Response From Server");
        }
      }
    }

  })

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    formik;

  return (
    <div className="p-5 rounded bg-white border shadow">
      <h1 className="text-4xl font-semibold mb-2">Register</h1>
      {/* <AlertMessage /> */}
      <form onSubmit={handleSubmit} className="grid gap-y-3 mb-4">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">First name</span>
          </label>
          <input
            type="text"
            placeholder="First name"
            className="input input-bordered w-full"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Last name</span>
          </label>
          <input
            type="text"
            placeholder="Last name"
            className="input input-bordered w-full"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
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