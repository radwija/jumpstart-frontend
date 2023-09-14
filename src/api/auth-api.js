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