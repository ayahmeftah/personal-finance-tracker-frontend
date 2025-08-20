import React from 'react'
import { useState, useEffect } from 'react'
import transactionsCalls from '../../../lib/transaction-api'
import EditTransactionButton from './EditTransactionButton'
import DeleteTransactionButton from './DeleteTransactionButton'
import './TransactionList.css'


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
        <div className="transaction-list-card">
            <div className="transaction-list-header">
                <select
                    value={selectedCategory}
                    onChange={(event) => setSelectedCategory(event.target.value)}
                    className="filter-select"
                >
                    <option value="all">All Categories</option>
                    {uniqueCategories.map((category) => (
                        <option key={category._id} value={category._id}>
                            {category.emoji} {category.name}
                        </option>
                    ))}
                </select>

            </div>

            {filteredTransactions.length === 0 ? (
                <p className="empty-text">No {transactionType}s yet</p>
            ) : (
                <ul>
                    {filteredTransactions.map((transaction) => (
                        <li key={transaction._id} className={transaction.transactionType}>
                            <div className="transaction-info">
                                <span className="emoji">{transaction.categoryId?.emoji}</span>
                                <div>
                                    <span className="name">{transaction.name}</span>
                                    <span className="date">
                                        {new Date(transaction.date).toLocaleDateString("en-GB", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric"
                                        })}
                                    </span>
                                </div>
                            </div>

                            <span className={`amount ${transaction.transactionType}`}>
                                {transaction.transactionType === "income" ? "+" : "-"}${transaction.amount}
                            </span>
                            <div className="action-buttons">
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
