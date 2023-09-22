import axios from "./axios"

const USER_URL = "/api/user"

export const myProfileApi = async (token) => {
  try {
    const response = await axios.get(`${USER_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      withCredentials: true
    })
    return response.data
  } catch (error) {
    if (error.response && error.response.data) {
      return error.response.data
    } else {
      return "No respon from server"
    }
  }
}

export const addProductToCart = async (token, cartItemRequest) => {
  try {
    const response = await axios.post(`${USER_URL}/add-product-to-cart`, cartItemRequest, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      withCredentials: true
    })
    return response
  } catch (error) {
    console.log(error)
    if (error.response && error.response.data) {
      throw error.response.data
    } else {
      throw "No respon from server"
    }
  }
}

export const getMyCartApi = async (token) => {
  try {
    const response = await axios.get(`${USER_URL}/get-my-cart`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      withCredentials: true
    })
    return response
  } catch (error) {
    console.log(error)
    if (error.response && error.response.data) {
      throw error.response.data
    } else {
      throw "No respon from server"
    }
  }
}