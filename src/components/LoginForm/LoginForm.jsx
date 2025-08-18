
import { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const baseURL = import.meta.env.VITE_BACK_END_SERVER_URL

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const res = await axios.post(`${baseURL}/auth/login`, {
        username,
        password
      })
      localStorage.setItem('token', res.data.token)
      onLogin(res.data.token)
      navigate('/')
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input 
        placeholder="Username"
        value={username}
        onChange={event => setUsername(event.target.value)}
      />
      <input 
        placeholder="Password"
        type="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm