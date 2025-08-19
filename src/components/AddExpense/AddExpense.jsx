import React from 'react'
import TransactionForm from '../TransactionForm/TransactionForm'
import { useNavigate } from 'react-router'
import { use } from 'react'

const AddExpense = () => {

    const navigate = useNavigate()

    return (
        <div className='main-content'>
            <TransactionForm
                transactionType="expense"
                navigateTo={() => navigate("/expenses")}
            />
        </div>
    )
}

export default AddExpense
