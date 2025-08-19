import React, { useEffect } from 'react'
import transactionsCalls from '../../../../lib/transaction-api'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { useState } from 'react'

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

    useEffect(()=>{
      getChartData()
    },[])

    return (
      <div>

      </div>
    )
  }
}
export default DashboardChart
