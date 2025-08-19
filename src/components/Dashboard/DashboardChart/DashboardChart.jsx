import React from 'react'
import transactionsCalls from '../../../../lib/transaction-api'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { useState } from 'react'

const DashboardChart = () => {
  const [chartData, setChartData] = useState([])

  const getChartData = async () => {
    const allTransactions = await transactionsCalls.getAllTransactions()

    if (!allTransactions.error) {

      const dailyTotals = {}

      allTransactions.forEach((transaction) => {
      
        const date = new Date(transaction.date).toLocaleDateString()

        if (!dailyTotals[date]) {
          dailyTotals[date] = { income: 0, expense: 0 }
        }

        if (transaction.transactionType === "income") {
          dailyTotals[date].income += transaction.amount
        } else {
          dailyTotals[date].expense += transaction.amount
        }
      })
    }

    return (
      <div>

      </div>
    )
  }
}
export default DashboardChart
