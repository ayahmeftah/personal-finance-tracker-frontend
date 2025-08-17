import axios from 'axios'

const baseURL = import.meta.env.VITE_BACK_END_SERVER_URL

const getAllCategories = async () => {
    try {
        const response = await axios.get(`${baseURL}/transactions/category`)
        return response.data
    } catch (error) {
        return {error: error.message}
    }
}

const createCategory = async () => {
    try {
        
    } catch (error) {
        return {error: error.message}
    }
}

const updateCategory = async () => {
    try {
        
    } catch (error) {
        return {error: error.message}
    }
}

const deleteCategory = async () => {
    try {
        
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