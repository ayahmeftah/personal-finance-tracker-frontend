import { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'

function SignUp({ onSignUp }) {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [profilePic, setProfilePic] = useState(null)

  const navigate = useNavigate()

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

      const res = await axios.post('http://localhost:3000/auth/signup', formData, {
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
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={event => setName(event.target.value)}
        required
      />

      <input
        placeholder="Username"
        value={username}
        onChange={event => setUsername(event.target.value)}
        required
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
        required
      />

      <input
        type="file"
        accept="image/*"
        onChange={event => setProfilePic(event.target.files[0])}
      />

      <button type="submit">Sign Up</button>
    </form>
  )
}

export default SignUp