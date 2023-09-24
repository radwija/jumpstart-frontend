import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { completePaymentApi } from '../../api/transaction-api'
import { useAuthUser } from 'react-auth-kit'

const RedirectCapture = () => {
  const queryParameters = new URLSearchParams(window.location.search)
  const captureToken = queryParameters.get("token")

  const auth = useAuthUser();
  const authToken = auth()?.token

  useEffect(() => {
    completePaymentApi(authToken, captureToken)
      .then(res => {
        console.log(res)
        window.location.href = "http://localhost:3000/user/orders"
      })
      .catch(err => {
        console.log(err)
      })
  })
}

export default RedirectCapture