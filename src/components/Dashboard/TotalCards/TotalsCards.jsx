import React from 'react'
import { useState } from 'react'

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

      data.forEach((transaction) => {
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

  return (
    <div>

    </div>
  )
}

export default TotalsCards
