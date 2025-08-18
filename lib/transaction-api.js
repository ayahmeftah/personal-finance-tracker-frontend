import axios from "axios"

const baseURL = import.meta.env.VITE_BACK_END_SERVER_URL

const getAllTransactions = async () => {
    try {
        const response = await axios.get(`${baseURL}/transactions`)
        return response.data
    } catch (error) {
        return { error: error.message }
    }
}

const createTransaction = async (data) => {
    try {
        const response = await axios.post(`${baseURL}/transactions`,data)
        return response
    } catch (error) {
        return { error: error.message }
    }
}

const editTransaction = async (id,data) => {
    try {
        const response = await axios.put(`${baseURL}/transactions/${id}`,data)
        return response
    } catch (error) {
        return { error: error.message }
    }
}

const deleteTransaction = async (id) => {
    try {
        const response = await axios.delete(`${baseURL}/transactions/${id}`)
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