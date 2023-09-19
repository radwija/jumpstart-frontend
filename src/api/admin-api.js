import axios from "./axios"

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
      return error.response.data
    } else {
      return "No respon from server"
    }
  }
}