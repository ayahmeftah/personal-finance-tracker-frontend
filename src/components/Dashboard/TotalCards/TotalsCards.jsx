import React from 'react'
import { useState, useEffect } from 'react'
import transactionsCalls from '../../../../lib/transaction-api'

const TotalsCards = () => {

  const [totals, setTotals] = useState({
    balance: 0,
    income: 0,
    expenses: 0
  })

  const getTotals = async () => {
    const allTransactions = await transactionsCalls.getAllTransactions()
    if (!allTransactions.error) {
      let income = 0
      let expenses = 0

      allTransactions.forEach((transaction) => {
        if (transaction.transactionType === "income") {
          income += transaction.amount
        } else if (transaction.transactionType === "expense") {
          expenses += transaction.amount
        }
      })

      setTotals({
        income,
        expenses,
        balance: income - expenses
      })
    }
  }

  useEffect(()=>{
    getTotals()
  },[])

  return (
    <div className="total-cards">
      <div className="card balance-card">
        <h3>Total Balance</h3>
        <p>${totals.balance.toFixed(2)}</p>
      </div>
      <div className="card income-card">
        <h3>Total Income</h3>
        <p>${totals.income.toFixed(2)}</p>
      </div>
      <div className="card expenses-card">
        <h3>Total Expenses</h3>
        <p>${totals.expenses.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default TotalsCards
