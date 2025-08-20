
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
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2 className='auth-title'>Login</h2>
      <input 
        className='auth-input'
        placeholder="Username"
        value={username}
        onChange={event => setUsername(event.target.value)}
      />
      <input 
        className='auth-input'
        placeholder="Password"
        type="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <button className='auth-button' type="submit">Login</button>
    </form>
  )
}

export default LoginForm