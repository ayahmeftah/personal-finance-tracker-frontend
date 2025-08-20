import { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import '../SignUpForm/auth.css'

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const baseURL = import.meta.env.VITE_BACK_END_SERVER_URL

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const res = await axios.post(`${baseURL}/auth/login`, { username, password })
      localStorage.setItem('token', res.data.token)
      onLogin(res.data.token)
      navigate('/')
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed')
    }
  }

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-title">Login</h2>

        <label className="auth-label">
          Username
          <input 
            className="auth-input"
            placeholder="Enter your username"
            value={username}
            onChange={event => setUsername(event.target.value)}
            required
          />
        </label>

        <label className="auth-label">
          Password
          <input 
            className="auth-input"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            required
          />
        </label>

        <button className="auth-button" type="submit">Login</button>
      </form>

      <p className="auth-link">
        Don’t have an account? <span onClick={() => navigate('/signup')}>Sign Up</span>
      </p>
    </div>
  )
}

export default LoginForm