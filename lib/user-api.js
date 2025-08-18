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

// Update user info
const updateUser = async (data) => {
  try {
    const token = localStorage.getItem("token")
    const response = await axios.put(`${baseURL}/users/profile`, data, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
  } catch (error) {
    return { error: error.message }
  }
}


const userCalls = {
  getUser,
  updateUser
}

export default userCalls
