import React from 'react'
import transactionsCalls from '../../../../lib/transaction-api'
import { useState, useEffect } from 'react'

const RecentTransactions = () => {

  const [transactions, setTransactions] = useState([])

  const getTransactionsSorted = async () => {
    const allTransactions = await transactionsCalls.getAllTransactions();
    if (!allTransactions.error) {
      const recent = allTransactions.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6)
      setTransactions(recent)
    }
  }

  useEffect(() => {
    getTransactionsSorted()
  }, [])

  return (
    <div className="recent-transactions-card">
      <h3>Recent Transactions</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction._id} className={transaction.transactionType}>
            <span className="emoji">{transaction.categoryId.emoji}</span>
            <span className="name">{transaction.name}</span>
            <span className="amount">
              {transaction.transactionType === "expense" ? "-" : "+"}${transaction.amount.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecentTransactions
