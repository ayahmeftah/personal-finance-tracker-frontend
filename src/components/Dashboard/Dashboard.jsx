import React from 'react'
import TotalCards from './TotalCards/TotalsCards'
import RecentTransactions from './RecentTransactions/RecentTransactions'
import DashboardChart from './DashboardChart/DashboardChart'

const Dashboard = () => {
  return (
    <div className="main-content">
      <h1>Dashboard</h1>
      <TotalCards />
      <RecentTransactions />
    </div>
  )
}

export default Dashboard
