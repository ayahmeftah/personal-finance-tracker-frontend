import React from 'react'
import { useNavigate } from 'react-router'
import TransactionList from '../TransactionList/TransactionList'

const IncomesList = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h1>Incomes</h1>
            <button onClick={()=> navigate("/incomes/add")}>
                + Add Income
            </button>
            <TransactionList transactionType="income" />
        </div>
    )
}

export default IncomesList
