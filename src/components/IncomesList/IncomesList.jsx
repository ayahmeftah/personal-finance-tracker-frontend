import React from 'react'
import { useNavigate } from 'react-router'
import TransactionList from '../TransactionList/TransactionList'
import '../TransactionList/TransactionList.css'

const IncomesList = () => {

    const navigate = useNavigate()

    return (
        <div className='main-content'>
            <div className='list-header-title'>
                <h1>Incomes</h1>
                <button className='add-transaction-btn' onClick={() => navigate("/incomes/add")}>
                    + Add Income
                </button>

            </div>
            <TransactionList transactionType="income" />
        </div>
    )
}

export default IncomesList
