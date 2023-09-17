import React, { useEffect, useState } from "react";
import login from '../../../assets/images/login.svg'
import { AlertMessage } from "../../../components/AlertMessage";
import { Link } from "react-router-dom";
import Layout from "../../../components/Layout";
import useDocumentTitle from "../../useDocumentTitle";
import { PageHeading } from "../../../components/PageHeading";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginApi } from "../../../api/auth-api";
import { useAuthUser, useIsAuthenticated, useSignIn } from "react-auth-kit";
import { useRedirectUser } from "../../../hooks/redirectUser";

const LoginForm = () => {
  const [alertMessage, setAlertMessage] = useState(null)
  const signIn = useSignIn()
  const redirectUser = useRedirectUser()
  const auth = useAuthUser();
  const role = auth()?.role?.[0]
  const isLogin = useIsAuthenticated()

  useEffect(() => {
    if (isLogin()) {
      redirectUser(role)
    }
  }, [])

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email required"),
      password: Yup.string()
        .required("Password required")
    }),
    onSubmit: async (values) => {
      const response = await loginApi(values)
      if (typeof response === "string") {
        setAlertMessage({
          messageType: "error",
          message: response
        })
      } else {
        setAlertMessage(null)
        signIn({
          token: response.accessToken,
          tokenType: "Bearer",
          expiresIn: 3600,
          authState: {
            email: response.email,
            token: response.accessToken,
            role: response.role
          }
        })
        redirectUser(response?.role?.[0])
      }

    }
  })

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    formik;

  return (
    <div className="p-5 rounded bg-white border shadow">
      <PageHeading headingTitle="Login" />
      {
        alertMessage &&
        <AlertMessage messageType={alertMessage.messageType} message={alertMessage.message} />
      }
      <form onSubmit={handleSubmit} className="grid gap-y-3">
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
            onBlur={handleBlur}
          />
          {errors.email && touched.email &&
            <label className="label">
              <span className="label-text-alt text-red-600">{errors.email}</span>
            </label>
          }
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
            onBlur={handleBlur}
          />
          {errors.password && touched.password &&
            <label className="label">
              <span className="label-text-alt text-red-600">{errors.password}</span>
            </label>
          }
          <label className="label">
            <span className="label-text-alt">
              <Link to="/find-account">Forgotten password?</Link>
            </span>
          </label>
        </div>
        <button type="submit" className="btn btn-primary w-full">Login</button>
      </form>
      <hr className="my-4" />
      <p className="text-center">Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  );
}

const Login = () => {
  useDocumentTitle(`Login`);
  return (
    <>
      <Layout>
        <div className='py-10 sm:flex sm:flex-wrap sm:flex-col md:grid md:grid-cols-12 p-5 '>
          <div className='lg:px-20 md:px-8 py-5 sm:col-span-12 md:col-span-6 hidden sm:hidden md:block lg:block'>
            <img src={login} alt="Login illustration" />
          </div>
          <div className='lg:px-20 md:px-8 py-5 sm:col-span-12 md:col-span-6'>
            <LoginForm />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Login;