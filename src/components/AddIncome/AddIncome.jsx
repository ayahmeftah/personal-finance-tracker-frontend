import React from 'react'
import TransactionForm from '../TransactionForm/TransactionForm'
import { useNavigate } from 'react-router'
import { use } from 'react'

const AddIncome = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h1>Add Income</h1>
            <TransactionForm
                transactionType="income"
                navigateTo={() => navigate("/incomes")}
            />
        </div>
    )
}

export default AddIncome
