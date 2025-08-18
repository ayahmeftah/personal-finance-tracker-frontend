import React from 'react'
import { Link } from 'react-router'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li><Link to='/'>Dashboard</Link></li>
        <li><Link to='/transactions/incomes'>Incomes</Link></li>
        <li><Link to='/transactions/expenses'>Expenses</Link></li>
        <li><Link to='/categories'>Categories</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
      </ul>
    </div>
  )
}

export default NavBar
