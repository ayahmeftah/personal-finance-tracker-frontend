import React from 'react'
import transactionsCalls from '../../../../lib/transaction-api'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { useState, useEffect } from 'react'
import './DashboardChart.css'

const DashboardChart = () => {
  const [chartData, setChartData] = useState([])

  const getChartData = async () => {
    const allTransactions = await transactionsCalls.getAllTransactions()

    if (!allTransactions.error) {

      const aggregated = []

      allTransactions.forEach((transaction) => {

        const date = new Date(transaction.date).toLocaleDateString()
        const existing = aggregated.find((item) => item.date === date)

        if (existing) {
          if (transaction.transactionType === "income") {
            existing.income += transaction.amount
          } else {
            existing.expense += transaction.amount
          }
        } else {
          aggregated.push({
            date,
            income: transaction.transactionType === "income" ? transaction.amount : 0,
            expense: transaction.transactionType === "expense" ? transaction.amount : 0
          })
        }
      })

      aggregated.sort((a, b) => new Date(a.date) - new Date(b.date))
      setChartData(aggregated)
    }
  }
  useEffect(() => {
    getChartData()
  }, [])

  return (
    <div className="dashboard-chart-card">
      <h3>Income vs Expenses</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="income" stroke="#4caf50" strokeWidth={2} />
          <Line type="monotone" dataKey="expense" stroke="#f44336" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DashboardChart
