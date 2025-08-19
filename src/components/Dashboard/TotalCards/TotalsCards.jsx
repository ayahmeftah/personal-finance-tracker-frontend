import React from 'react'
import { useState, useEffect } from 'react'
import transactionsCalls from '../../../../lib/transaction-api'
import './TotalCards.css'
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

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
        <div className="icon"><WalletOutlinedIcon sx={{ fontSize: 60 }}/></div>
        <h3>Total Balance</h3>
        <p>${totals.balance.toFixed(2)}</p>
      </div>
      <div className="card income-card">
        <div className="icon"><PaidOutlinedIcon sx={{ fontSize: 60 }}/></div>
        <h3>Total Income</h3>
        <p>${totals.income.toFixed(2)}</p>
      </div>
      <div className="card expenses-card">
        <div className="icon"><AccountBalanceOutlinedIcon sx={{ fontSize: 60 }}/></div>
        <h3>Total Expenses</h3>
        <p>${totals.expenses.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default TotalsCards
