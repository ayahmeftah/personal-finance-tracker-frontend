import { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import './auth.css'

function SignUp({ onSignUp }) {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [profilePic, setProfilePic] = useState(null)

  const navigate = useNavigate()
  const baseURL = import.meta.env.VITE_BACK_END_SERVER_URL

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('username', username)
      formData.append('password', password)
      if (profilePic) {
        formData.append('profilePic', profilePic)
      }

      const res = await axios.post(`${baseURL}/auth/signup`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })

      localStorage.setItem('token', res.data.token)
      onSignUp(res.data.token)
      navigate('/')
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed')
    }
  }

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2 className="auth-title">Sign Up</h2>

        <label className="auth-label">
          Name
          <input
            className="auth-input"
            placeholder="Enter your full name"
            value={name}
            onChange={event => setName(event.target.value)}
            required
          />
        </label>

        <label className="auth-label">
          Username
          <input
            className="auth-input"
            placeholder="Enter a username"
            value={username}
            onChange={event => setUsername(event.target.value)}
            required
          />
        </label>

        <label className="auth-label">
          Password
          <input
            className="auth-input"
            placeholder="Enter a password"
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            required
          />
        </label>

        <label className="auth-label">
          Profile Picture (optional)
          <input
            className="auth-file"
            type="file"
            accept="image/*"
            onChange={event => setProfilePic(event.target.files[0])}
          />
        </label>

        <button className="auth-button" type="submit">Sign Up</button>
      </form>

      <p className="auth-link">
        Have an Account? <span onClick={() => navigate('/login')}>Login</span>
      </p>
    </div>
  )
}

export default SignUp