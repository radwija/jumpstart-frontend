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
    console.log(response)
  } catch (error) {

  }
}