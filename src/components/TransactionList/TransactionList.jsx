import React from 'react'
import { useState, useEffect } from 'react'
import transactionsCalls from '../../../lib/transaction-api'
import EditTransactionButton from './EditTransactionButton'
import DeleteTransactionButton from './DeleteTransactionButton'


const TransactionList = ({ transactionType }) => {
    const [transactions, setTransactions] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("all")

    const getTransactionsByType = async () => {
        const res = await transactionsCalls.getAllTransactions()
        if (!res.error) {
            setTransactions(res.filter(t => t.transactionType === transactionType))
        }
    }

    useEffect(() => {
        getTransactionsByType()
    }, [transactionType])

    const uniqueCategories = transactions.map(transaction => transaction.categoryId).filter((category, index, self) =>
        category && index === self.findIndex(c => c._id === category._id)
    )

    const filteredTransactions =
        selectedCategory === "all" ? transactions
            : transactions.filter(transaction => transaction.categoryId?._id === selectedCategory)

    return (
        <div>
            {transactions.length > 0 && (
                <div style={{ marginBottom: "15px" }}>
                    <select
                        value={selectedCategory}
                        onChange={(event) => setSelectedCategory(event.target.value)}
                    >
                        <option value="all">All Categories</option>
                        {uniqueCategories.map((category) => (
                            <option key={category._id} value={category._id}>
                                {category.emoji} {category.name}
                            </option>
                        ))}
                    </select>
                </div>
            )}
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
                                <div style={{ fontWeight: "bold" }}>
                                    {transaction.categoryId?.emoji && (
                                        <span style={{ marginRight: "6px" }}>{transaction.categoryId.emoji}</span>
                                    )}
                                    {transaction.name}
                                </div>
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
                            <div style={{ display: "flex", gap: "5px" }}>
                                <EditTransactionButton
                                    transactionToEdit={transaction}
                                    transactionType={transactionType}
                                />
                                <DeleteTransactionButton
                                    transactionID={transaction._id}
                                    getTransactionsByType={getTransactionsByType}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default TransactionList
