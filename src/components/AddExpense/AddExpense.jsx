import React from 'react'
import TransactionForm from '../TransactionForm/TransactionForm'
import { useNavigate } from 'react-router'
import { use } from 'react'

const AddExpense = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h1>Add Expense</h1>
            <TransactionForm
                transactionType="expense"
                navigateTo={() => navigate("/expenses")}
            />
        </div>
    )
}

export default AddExpense
