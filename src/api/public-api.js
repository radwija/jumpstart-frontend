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