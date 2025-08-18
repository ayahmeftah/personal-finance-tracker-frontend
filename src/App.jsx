import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { useState } from 'react'
import {jwtDecode} from 'jwt-decode'

import LoginForm from './components/LoginForm/LoginForm'
import SignUp from './components/SignUpForm/SignUpForm'
import Dashboard from './components/Dashboard/Dashboard'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

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
  if (token) {
    const decodedToken = jwtDecode(token)
    console.log(decodedToken)
  }

  return (
    <Router>
      <div>
        {token ? <LogoutButton onLogout={handleLogout} /> : null}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route
            path="/pets"
            element={
              <ProtectedRoute>
                <Pets />
              </ProtectedRoute>
            }
          /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
