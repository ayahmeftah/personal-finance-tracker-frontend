import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { useState } from 'react'
import { jwtDecode } from 'jwt-decode'

import LoginForm from './components/LoginForm/LoginForm'
import SignUp from './components/SignUpForm/SignUpForm'
import LogoutButton from './components/LogoutButton/LogoutButton'
import Dashboard from './components/Dashboard/Dashboard'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import CategoryForm from './components/Category/CategoryForm/CategoryForm'
import CategoryList from './components/Category/CategoryList/CategoryList'
import EditCategoryButton from './components/Category/EditCategoryButton/EditCategoryButton'

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'))

  function handleLogin(newToken) {
    setToken(newToken)
  }

  function handleLogout() {
    setToken(null)
    localStorage.removeItem('token')
  }

  // This is how to decode the token and gget the 
  // information that you added to the payload in your login 
  // route in the backend
  let decodedToken = null
  if (token) {
    try {
      decodedToken = jwtDecode(token)
      console.log(decodedToken)
    } catch (err) {
      console.error("Invalid token in localStorage:", token)
      localStorage.removeItem("token")
      setToken(null)
    }
  }

  return (
    <Router>
      <div>
        {token ? <LogoutButton onLogout={handleLogout} /> : null}
        <Routes>
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp onSignUp={handleLogin} />} />
          <Route path="/" element={
            <ProtectedRoute>
              {/* <CategoryForm /> */}
              {/* <Dashboard /> */}
              {/* <CategoryList/> */}
              <EditCategoryButton />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
