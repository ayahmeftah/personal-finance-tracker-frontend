import axios from "axios"

const baseURL = import.meta.env.VITE_BACK_END_SERVER_URL

// Get logged-in user
const getUser = async () => {
  try {
    const token = localStorage.getItem("token")
    const response = await axios.get(`${baseURL}/users/profile`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
  } catch (error) {
    return { error: error.message }
  }
}



const userCalls = {
  getUser
}

export default userCalls
