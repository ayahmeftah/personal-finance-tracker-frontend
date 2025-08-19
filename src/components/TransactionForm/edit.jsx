import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router' // for reading the edit state
import transactionsCalls from '../../../lib/transaction-api'
import categoriesCalls from '../../../lib/category-api'

const TransactionForm = ({ transactionType, navigateTo }) => {
    const navigate = useNavigate()
    const location = useLocation() // will carry transaction for edit
    const editingTransaction = location.state?.transaction

    const [formData, setFormData] = useState({
        name: "",
        amount: "",
        categoryId: "",
        date: "",
        transactionType: transactionType,
    })

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            const res = await categoriesCalls.getAllCategories() || []
            setCategories(res.filter(category => !res.error && category.type === transactionType))
        }
        getCategories()
    }, [transactionType])

    // populate form if editing
    useEffect(() => {
        if (editingTransaction) {
            setFormData({
                name: editingTransaction.name,
                amount: editingTransaction.amount,
                categoryId: editingTransaction.categoryId,
                date: editingTransaction.date.split("T")[0],
                transactionType: editingTransaction.transactionType
            })
        }
    }, [editingTransaction])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (editingTransaction) {
            await transactionsCalls.editTransaction(editingTransaction._id, formData)
        } else {
            await transactionsCalls.createTransaction(formData)
        }
        navigateTo ? navigateTo() : navigate(`/${transactionType}s`)
    }

    return (
        <div className='main-content'>
            <form onSubmit={handleSubmit}>
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Transaction name" required />
                <input name="amount" type="number" value={formData.amount} onChange={handleChange} placeholder="Amount" required />
                <input name="date" type="date" value={formData.date} onChange={handleChange} required />
                <select name="categoryId" value={formData.categoryId} onChange={handleChange} required>
                    <option value="">Select Category</option>
                    {categories.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
                </select>
                <button type="submit">{editingTransaction ? "Update" : "Add"} {transactionType}</button>
            </form>
        </div>
    )
}

export default TransactionForm

