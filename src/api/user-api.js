import axios from "./axios"

export const myProfileApi = async (token) => {
  try {
    const response = await axios.get("/api/user/me", {
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