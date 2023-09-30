import { useFormik } from 'formik';
import React from 'react'
import * as Yup from "yup"
import { updateProfilePictureApi } from '../../../api/user-api';
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit';
import { useRedirectUser } from '../../../hooks/redirectUser';
import { useNavigate } from 'react-router-dom';

export const UpdateProfilePictureModal = () => {
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
      profilePicture: null
    },
    validationSchema: Yup.object({
      profilePicture: Yup.mixed()
        .required("Please choose your picture")
    }),
    onSubmit: async (values) => {
      const formData = new FormData()
      formData.append("profilePicture", values.profilePicture)

      updateProfilePictureApi(token, formData)
        .then(res => {
          formik.resetForm();
          window.location.reload()
        })
        .catch(error => {
          console.log({ error })
        })
    }

  })

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    formik;
  return (
    <>
      <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()}>Change picture</button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Change profile picture</h3>
          <form
            className='grid gap-y-3'
            onSubmit={handleSubmit}
          >
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Choose your picture</span>
              </label>
              <input
                type="file"
                accept=".jpeg, .jpg, ,.png, .avif"
                className="file-input file-input-bordered  w-full max-w-xs"
                name="profilePicture"
                onChange={(event) =>
                  formik.setFieldValue("profilePicture", event.target.files[0])
                }
                onBlur={handleBlur}
              />
              {errors.profilePicture && touched.profilePicture &&
                <label className="label">
                  <span className="label-text-alt text-red-600">{errors.profilePicture}</span>
                </label>
              }
            </div>
            <button type='submit' className='btn btn-primary'>Save</button>
          </form>
        </div>
      </dialog>
    </>
  )
}
