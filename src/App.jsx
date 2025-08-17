import React from 'react'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Dashboard from './components/Dashboard/Dashboard'

const App = () => {
  return (
    <>
      <NavBar/>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
