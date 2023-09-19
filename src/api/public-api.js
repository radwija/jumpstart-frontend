import axios from "./axios"

export const showAllCategoriesApi = async () => {
  try {
    const response = await axios.get("/api/category/categories?order=asc")
    return response
  } catch (error) {
    if (error.response && error.response.data) {
      return error.response.data
    } else {
      return "No respon from server"
    }
  }
}

export const showAllProductsApi = async () => {
  try {
    const response = await axios.get("/api/product/products")
    return response
  } catch (error) {
    if (error.response && error.response.data) {
      return error.response.data
    } else {
      return "No respon from server"
    }
  }
}

export const showProductDetailsApi = async (productId) => {
  try {
    const response = await axios.get(`/api/product/products/${productId}`)
    return response
  } catch (error) {
    if (error.response && error.response.data) {
      return error.response.data
    } else {
      return "No respon from server"
    }
  }
}