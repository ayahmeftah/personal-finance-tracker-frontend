import axios from "axios"

const baseURL = import.meta.env.VITE_BACK_END_SERVER_URL

const getAllTransactions = async () => {
    try {
        const token = localStorage.getItem("token")
        const response = await axios.get(`${baseURL}/transactions` , {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response.data
    } catch (error) {
        return { error: error.message }
    }
}

const createTransaction = async (data) => {
    try {
        const token = localStorage.getItem("token")
        const response = await axios.post(`${baseURL}/transactions`,data, {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response
    } catch (error) {
        return { error: error.message }
    }
}

const editTransaction = async (id,data) => {
    try {
        const token = localStorage.getItem("token")
        const response = await axios.put(`${baseURL}/transactions/${id}`,data,{
            headers: { Authorization: `Bearer ${token}` }
        })
        return response
    } catch (error) {
        return { error: error.message }
    }
}

const deleteTransaction = async (id) => {
    try {
        const token = localStorage.getItem("token")
        const response = await axios.delete(`${baseURL}/transactions/${id}`,{
            headers: { Authorization: `Bearer ${token}` }
        })
        return response
    } catch (error) {
        return { error: error.message }
    }
}

const transactionsCalls = {
    getAllTransactions,
    createTransaction,
    editTransaction,
    deleteTransaction
}

export default transactionsCalls