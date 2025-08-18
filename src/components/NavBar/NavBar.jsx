import React from 'react'
import { NavLink, useNavigate } from 'react-router'
import './NavBar.css'
import { useState, useEffect } from 'react'
import userCalls from '../../../lib/user-api'
import LogoutButton from '../LogoutButton/LogoutButton'

const NavBar = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const fetchUser = async () => {
    const res = await userCalls.getUser()
    if (!res.error) {
      setUser(res)
    } else {
      setUser(null)
    }
  }

  useEffect(() => {
    fetchUser()
  },[])

  const handleLogout = () => {
    localStorage.removeItem("token")
    setUser(null);
    navigate("/login")
  }

  const profilePic = user?.profilePic ? user.profilePic : "/images/default-profile-img.jpg"

  return (
    <div className='navbar'>
      <div className="profile">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h3>{user ? user.name : "User"}</h3>
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
        <li onClick={handleLogout}>
          <NavLink to="/logout" activeclassname="active">
            <i className="icon">🚪</i> Logout
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
