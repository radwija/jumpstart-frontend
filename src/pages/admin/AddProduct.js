import React, { useEffect } from 'react'
import { AdminSidebar } from '../../components/admin/header/AdminSidebar'
import AdminLayout from '../../components/admin/layout/AdminLayout'
import { PageHeading } from '../../components/PageHeading'
import { Stat } from '../../components/Stat'
import useDocumentTitle from '../useDocumentTitle'
import { BackIcon, EyeIcon, TrashIcon } from '../../assets/SvgIcons'
import { Link, useNavigate } from 'react-router-dom'
import { AdminTable } from '../../components/AdminTable'
import { BackButton } from '../../components/BackButton'
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit'
import { useRedirectUser } from '../../hooks/redirectUser'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { addProductApi } from '../../api/admin-api'

const AddProduct = () => {
  useDocumentTitle('Add Product')

  const auth = useAuthUser();
  const role = auth()?.role?.[0]
  const email = auth()?.email
  const token = auth()?.token
  const isLogin = useIsAuthenticated()
  const isAdmin = isLogin() && role === "ROLE_ADMIN"
  const navigate = useNavigate()
  const redirectUser = useRedirectUser()

  const formik = useFormik({
    initialValues: {
      productName: "",
      description: "",
      price: 0,
      stock: 0,
      weight: 0,
      categoryId: 0
    },
    validationSchema: Yup.object({
      productName: Yup.string()
        .required("Product name required"),
      description: Yup.string()
        .required("Please add description"),
      price: Yup.number()
        .required("Price required ($9,999,999.99 maximum)")
        .max(9999999.99),
      stock: Yup.number()
        .required("Stock required")
        .min(1),
      weight: Yup.number()
        .required("Weight required (in kg)")
        .min(0.01),
      categoryId: Yup.number()
        .required("Please choose category")
        .min(1),
    }),
    onSubmit: (values) => {
      addProductApi(token, {
        productName: values.productName,
        description: values.description,
        price: values.price,
        stock: values.stock,
        weight: values.weight,
        categoryId: values.categoryId
      })
        .then(res => {
          navigate("/product")
        })
        .catch(error => {
          console.log(error)
        })
    }
  })

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    formik;

  return (
    <>
      <AdminLayout>
        <div className='flex'>
          <BackButton to="/admin/inventory" />
          <PageHeading headingTitle='Add Product' />
        </div>
        <form onSubmit={handleSubmit} className='grid gap-y-3'>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Product name</span>
            </label>
            <input
              type="text"
              placeholder="Product name"
              className="input input-bordered w-full"
              name='productName'
              value={values.productName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.productName && touched.productName &&
              <label className="label">
                <span className="label-text-alt text-red-600">{errors.productName}</span>
              </label>
            }
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              className="select select-bordered max-w-xs"
              name='categoryId'
              value={values.categoryId}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option disabled selected value={0}>Category</option>
              <option value={1}>Category 1</option>
              <option value={2}>Category 2</option>
              <option value={3}>Category 3</option>
            </select>
            {errors.category && touched.category &&
              <label className="label">
                <span className="label-text-alt text-red-600">{errors.category}</span>
              </label>
            }
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Product Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Product Description"
              name='description'
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
            {errors.description && touched.description &&
              <label className="label">
                <span className="label-text-alt text-red-600">{errors.description}</span>
              </label>
            }
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price (in USD)</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered w-full"
              name='price'
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.price && touched.price &&
              <label className="label">
                <span className="label-text-alt text-red-600">{errors.price}</span>
              </label>
            }
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Stock</span>
            </label>
            <input
              type="number"
              placeholder="Stock"
              className="input input-bordered w-full"
              name='stock'
              value={values.stock}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.stock && touched.stock &&
              <label className="label">
                <span className="label-text-alt text-red-600">{errors.stock}</span>
              </label>
            }
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Weight (in kg)</span>
            </label>
            <input
              type="number"
              placeholder="Weight"
              className="input input-bordered w-full"
              name='weight'
              value={values.weight}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <button type='submit' className='btn btn-primary'>Add product</button>
        </form>
      </AdminLayout >
    </>
  )
}

export default AddProduct;