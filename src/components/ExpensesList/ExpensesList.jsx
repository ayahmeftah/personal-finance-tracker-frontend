import React from 'react'
import { useNavigate } from 'react-router'
import TransactionList from '../TransactionList/TransactionList'

const ExpensesList = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h1>Expenses</h1>
            <button onClick={()=> navigate("/expenses/add")}>
                + Add Expense
            </button>
            <TransactionList transactionType="expense" />
        </div>
    )
}

export default ExpensesList
