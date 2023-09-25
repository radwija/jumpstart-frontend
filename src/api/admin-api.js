import axios from "./axios"

const ADMIN_URL = "/api/admin"

export const createCategoryApi = async (token, createCategoryRequest) => {
  try {
    const response = await axios.post(`${ADMIN_URL}/create-category`, createCategoryRequest, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      withCredentials: true
    })
    return response
  } catch (error) {
    if (error.response && error.response.data) {
      throw error.response.data
    } else {
      throw "No respon from server"
    }
  }
}

export const addProductApi = async (token, productRequest) => {
  try {
    const response = await axios.post(`${ADMIN_URL}/add-product`, productRequest, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      withCredentials: true
    })
    return response
  } catch (error) {
    if (error.response && error.response.data) {
      throw error.response.data
    } else {
      throw "No respon from server"
    }
  }
}

export const deleteProductByProductIdApi = async (token, productId) => {
  try {
    const response = await axios.delete(`${ADMIN_URL}/delete-product/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      withCredentials: true
    })
    return response
  } catch (error) {
    if (error.response && error.response.data) {
      throw error.response.data
    } else {
      throw "No respon from server"
    }
  }
}

export const getOrdersApi = async (token, filter) => {
  let param = "";
  if (filter != null) {
    param = `?filter=${filter}`
  }

  try {
    const response = await axios.get(`${ADMIN_URL}/orders${param}`, {
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

export const completeOrderApi = async (token, orderId) => {
  console.log("id api:" + orderId)
  try {
    const response = await axios.get(`${ADMIN_URL}/complete-order/${orderId}`, {
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