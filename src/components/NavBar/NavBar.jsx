import React from 'react'
import { NavLink, useNavigate } from 'react-router'
import './NavBar.css'
import { useState, useEffect } from 'react'
import userCalls from '../../../lib/user-api'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

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
            <DashboardOutlinedIcon /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/transactions/incomes" activeclassname="active">
            <PaidOutlinedIcon /> Incomes
          </NavLink>
        </li>
        <li>
          <NavLink to="/transactions/expenses" activeclassname="active">
            <AccountBalanceOutlinedIcon /> Expenses
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories" activeclassname="active">
            <CategoryOutlinedIcon /> Categories
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeclassname="active">
            <AccountCircleOutlinedIcon /> Profile
          </NavLink>
        </li>
        <li onClick={handleLogout}>
          <NavLink to="/logout" activeclassname="active">
            <ExitToAppOutlinedIcon /> Logout
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
