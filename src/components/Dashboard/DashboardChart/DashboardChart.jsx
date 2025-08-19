import React from 'react'
import transactionsCalls from '../../../../lib/transaction-api'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { useState } from 'react'

const DashboardChart = () => {
  const [chartData, setChartData] = useState([])

  const getChartData = async () => {
    const allTransactions = await transactionsCalls.getAllTransactions()
    
  }

  return (
    <div>
      
    </div>
  )
}

export default DashboardChart
