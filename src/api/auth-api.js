import axios from "./axios"

export const registrationApi = async (registrationRequest) => {
  return await axios.post("/api/auth/register", {
    firstName: registrationRequest.firstName,
    lastName: registrationRequest.lastName,
    email: registrationRequest.email,
    password: registrationRequest.password,
  }).then(response => {
    if (!response.ok) {
      return {
        code: response.code,
        message: response.message
      }
    }
    return {
      code: response.code,
      message: response.message
    }
  }).catch((error) => {
    console.log(error)
  })
}

export const accountActivationApi = async (uuid) => {
  return await axios.get(`/api/auth/account-activation/${uuid}`)
}

export const loginApi = async (loginRequest) => {
  try {
    const response = await axios.post(`/api/auth/login`, loginRequest)
    if (response.data) {
      return response.data
    }
  } catch (error) {
    if (error.response && error.response.data) {
      return error.response.data
    } else {
      return "No respon from server"
    }
  }


}