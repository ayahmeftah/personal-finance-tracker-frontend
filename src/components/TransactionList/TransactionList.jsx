import React from 'react'
import { useState, useEffect } from 'react'
import transactionsCalls from '../../../lib/transaction-api'


const TransactionList = ({ transactionType }) => {
    const [transactions, setTransactions] = useState([])

    const getTransactionsByType = async () => {
        const res = await transactionsCalls.getAllTransactions()
        if (!res.error) {
            setTransactions(res.filter(t => t.transactionType === transactionType))
        }
    }

    useEffect(() => {
        getTransactionsByType()
    }, [transactionType])

    return (
        <div>
            {transactions.length === 0 ? (
                <p>No {transactionType}s yet</p>
            ) : (
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {transactions.map((transaction) => (
                        <li
                            key={transaction._id}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "10px 0",
                                borderBottom: "1px solid #ddd"
                            }}
                        >
                            <div>
                                <div style={{ fontWeight: "bold" }}>{transaction.name}</div>
                                <div style={{ fontSize: "0.9em", color: "#666" }}>
                                    {new Date(transaction.date).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric"
                                    })}
                                </div>
                            </div>

                            <div
                                style={{
                                    color: transaction.transactionType === "income" ? "green" : "red",
                                    fontWeight: "bold"
                                }}
                            >
                                {transaction.transactionType === "income" ? "+" : "-"}${transaction.amount}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default TransactionList
