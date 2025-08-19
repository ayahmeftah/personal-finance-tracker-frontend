import axios from 'axios'

const baseURL = import.meta.env.VITE_BACK_END_SERVER_URL

const getAuthHeaders = () => {
    const token = localStorage.getItem('token')
    return token ? { Authorization: `Bearer ${token}`} : {}
}

const getAllCategories = async () => {
    try {
        const response = await axios.get(`${baseURL}/category`, { headers: getAuthHeaders()})
        return response.data
    } catch (error) {
        return {error: error.message}
    }
}

const createCategory = async (data) => {
    try {
        const response = await axios.post(`${baseURL}/category`, data, { headers: getAuthHeaders()})
        return response.data
    } catch (error) {
        return {error: error.message}
    }

}

const updateCategory = async (data,categoryId) => {
    try {
        const response = await axios.put(`${baseURL}/category/${categoryId}`, data, { headers: getAuthHeaders()})
        return response
    } catch (error) {
        return {error: error.message}
    }
}

const deleteCategory = async (categoryId) => {
    try {
        const response = await axios.delete(`${baseURL}/category/${categoryId}`, { headers: getAuthHeaders()})
        return response 
    } catch (error) {
        return {error: error.message}
    }
}


const categoryCalls = {
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory
}

export default categoryCalls