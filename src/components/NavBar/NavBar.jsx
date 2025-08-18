import React from 'react'
import { NavLink } from 'react-router'
import './NavBar.css'


const NavBar = ({user}) => {

  const profilePic = user?.profilePic || "/images/default-profile-img.jpg"
  const name = user?.name

  return (
    <div className='navbar'>
      <div className="profile">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h3>{name}</h3>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/" end activeclassname="active">
            <i className="icon">🏠</i> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/transactions/incomes" activeclassname="active">
            <i className="icon">💰</i> Income
          </NavLink>
        </li>
        <li>
          <NavLink to="/transactions/expenses" activeclassname="active">
            <i className="icon">💸</i> Expense
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories" activeclassname="active">
            <i className="icon">📂</i> Categories
          </NavLink>
        </li>
        <li>
          <NavLink to="/logout" activeclassname="active">
            <i className="icon">🚪</i> Logout
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
