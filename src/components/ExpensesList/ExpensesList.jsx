import React from 'react'
import { useNavigate } from 'react-router'
import TransactionList from '../TransactionList/TransactionList'
import '../TransactionList/TransactionList.css'

const ExpensesList = () => {

    const navigate = useNavigate()

    return (
        <div className='main-content'>
            <div className='list-header-title'>
                <h1>Expenses</h1>
                <button className='add-transaction-btn' onClick={() => navigate("/expenses/add")}>
                    + Add Expense
                </button>
            </div>

            <TransactionList transactionType="expense" />
        </div>
    )
}

export default ExpensesList
