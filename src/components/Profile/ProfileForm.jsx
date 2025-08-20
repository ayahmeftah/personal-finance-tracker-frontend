import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import userCalls from '../../../lib/user-api'

const ProfileForm = ({ userId }) => {
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState(null)
    const [selectedFile, setSelectedFile] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        profilePic: ''
    })

    const [removePic, setRemovePic] = useState(false)

    useEffect(() => {
        const data = async () => {
            try {
                const data = await userCalls.getUser()
                setCurrentUser(data)
                setFormData({
                    name: data.name || '',
                    username: data.username || '',
                    profilePic: data.profilePic || ''
                })
            } catch (error) {
                console.log({ error: error.message })
            }
        }
        data()
    }, [userId])

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handlePictureChange = (event) => {
        setSelectedFile(event.target.files[0])
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = new FormData()

        data.append("name", formData.name)
        data.append("username", formData.username)

        if (selectedFile) {
            data.append("profilePic", selectedFile)
        }

        if (formData.newPassword) {
            data.append("password", formData.newPassword)
        }

        if (removePic) {
            await userCalls.removeProfilePic()
            navigate('/profile')
            return
        }

        if (formData.currentPassword && formData.newPassword) {
            data.append("currentPassword", formData.currentPassword)
            data.append("newPassword", formData.newPassword)
        }
        try {
            await userCalls.updateUser(data)
            navigate('/profile')
        } catch (error) {
            console.log({ error: error.message })
        }
    }

    return (
        <div className='main-content'>
            <h2>Update User Profile</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input name='name' value={formData.name} onChange={handleChange} placeholder='name' id='name'></input>
                <label htmlFor="username">Username</label>
                <input name='username' value={formData.username} onChange={handleChange} placeholder='username' id='username'></input>
                <label htmlFor="profilePic">Change Profile Picture</label>
                <input name='profilePic' onChange={handlePictureChange} placeholder='Profile Picture' accept="image/*" type='file' id='profilePic'></input>
                <input
                    type="checkbox"
                    checked={removePic}
                    onChange={(event) => setRemovePic(event.target.checked)}
                    id='removePic'
                />
                <label htmlFor='removePic'>Remove current picture</label>
                <hr />
                <label htmlFor="currentPassword" className="form-label">Current Password</label>
                <input type="password" name="currentPassword" id="currentPassword"></input>
                <label htmlFor="newPassword" className="form-label">New Password</label>
                <input type="password" name="newPassword" id="newPassword"></input>
                <button>Save</button>
            </form>
        </div>
    )
}

export default ProfileForm