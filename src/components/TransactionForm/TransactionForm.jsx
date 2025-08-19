import React from 'react'
import transactionsCalls from "../../../lib/transaction-api"
import categoriesCalls from "../../../lib/category-api"
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'

const TransactionForm = ({ transactionType, navigateTo }) => {
    const location = useLocation()
    const navigate = useNavigate()

    const editingTransaction = location.state.transaction

    const [formData, setFormData] = useState({
        name: "",
        amount: "",
        categoryId: "",
        date: "",
        transactionType: transactionType,
    })

    const [categories, setCategories] = useState([])

    const getCategories = async () => {
        const res = await categoriesCalls.getAllCategories() || []
        setCategories(res.filter(category => !res.error && category.type === transactionType))
    }

    useEffect(() => {
        getCategories()
    }, [transactionType])

    const editPopulate = () => {
        if (editingTransaction) {
            setFormData({
                name: editingTransaction.name,
                amount: editingTransaction.amount,
                categoryId: editingTransaction.categoryId,
                date: editingTransaction.date.split("T")[0],
                transactionType: editingTransaction.transactionType
            })
        }
    }

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const res = await transactionsCalls.createTransaction(formData)

        if (!res.error) {
            setFormData({
                name: "",
                amount: "",
                categoryId: "",
                date: "",
                transactionType
            })

            if (navigateTo) navigateTo()
        }
    }

    return (
        <div className='main-content'>
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Transaction name"
                    required
                />
                <input
                    name="amount"
                    type="number"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="Amount"
                    required
                />
                <input
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
                <div style={{ display: "flex", gap: "8px" }}>
                    <select
                        name="categoryId"
                        value={formData.categoryId}
                        onChange={handleChange}
                        required>
                        <option value="">Select Category</option>
                        {categories.map((category) => (
                            <option key={category._id} value={category._id}>{category.name}</option>
                        ))}
                    </select>

                </div>

                <button type="submit">Add {transactionType}</button>
            </form>
        </div>
    )
}

export default TransactionForm
