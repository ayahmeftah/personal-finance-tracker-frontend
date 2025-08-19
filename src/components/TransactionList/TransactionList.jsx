import React from 'react'
import { useState } from 'react'
import transactionsCalls from '../../../lib/transaction-api'


const TransactionList = ({ transactionType }) => {
    const [transactions, setTransactions] = useState([])

    const getTransactionsByType = async () => {
        const res = await transactionsCalls.getAllTransactions()
        if (!res.error) {
            setTransactions(res.filter(t => t.transactionType === transactionType))
        }
    }

    return (
        <div>
            {transactions.length === 0 ? (
                <p>No {transactionType}s yet</p>
            ) : (
                <ul>
                    {transactions.map((tran) => (
                        <li key={tran._id}>
                            {tran.name} - {tran.amount} on {new Date(tran.date).toLocaleDateString()}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default TransactionList
