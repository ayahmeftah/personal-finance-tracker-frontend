import React from 'react'
import TotalCards from './TotalCards/TotalsCards'
import RecentTransactions from './RecentTransactions/RecentTransactions'
import DashboardChart from './DashboardChart/DashboardChart'
import './Dashboard.css'

const Dashboard = () => {
  
  return (
    <div className="main-content">
      <h1>Dashboard</h1>
      <TotalCards />
      
      <div className="dashboard-lower">
        <RecentTransactions />
        <DashboardChart />
      </div>
    </div>
  )
}

export default Dashboard
