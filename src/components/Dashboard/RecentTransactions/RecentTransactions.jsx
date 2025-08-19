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

  useEffect(()=>{
    getTransactionsSorted()
  },[])

  return (
    <div>

    </div>
  )
}

export default RecentTransactions
