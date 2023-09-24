import axios from "./axios"

export const createCategoryApi = async (token, createCategoryRequest) => {
  try {
    const response = await axios.post("/api/admin/create-category", createCategoryRequest, {
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
    const response = await axios.post("/api/admin/add-product", productRequest, {
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
    const response = await axios.delete(`/api/admin/delete-product/${productId}`, {
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