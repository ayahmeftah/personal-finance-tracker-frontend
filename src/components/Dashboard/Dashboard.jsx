import React from 'react'
import TotalCards from './TotalCards/TotalsCards'
import RecentTransactions from './RecentTransactions'
import DashboardChart from './DashboardChart'

const Dashboard = () => {
  return (
    <div className="main-content">
      <h1>Dashboard</h1>
      <TotalCards />
    </div>
  )
}

export default Dashboard
