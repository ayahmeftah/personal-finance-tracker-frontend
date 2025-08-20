import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import userCalls from '../../../lib/user-api'
import './ProfileForm.css'
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
        <div className='profile-container'>
            <h2 className='profile-title'>Update User Profile</h2>
            <form onSubmit={handleSubmit} className='profile-form'>
                <label htmlFor="name" className='profile-label'>Name</label>
                <input name='name' value={formData.name} onChange={handleChange} placeholder='name' id='name'  className='profile-input'></input>
                <label htmlFor="username"  className='profile-label'>Username</label>
                <input name='username' value={formData.username} onChange={handleChange} placeholder='username' id='username'  className='profile-input'></input>
                <label className='profile-label'htmlFor="profilePic">Change Profile Picture</label>
                <input className='profile-input'name='profilePic' onChange={handlePictureChange} placeholder='Profile Picture' accept="image/*" type='file' id='profilePic'></input>
                <input
                    className='profile-input'
                    type="checkbox"
                    checked={removePic}
                    onChange={(event) => setRemovePic(event.target.checked)}
                    id='removePic'
                />
                <label htmlFor='removePic' className='profile-label'>Remove current picture</label>
                {/* <label htmlFor="currentPassword" className='profile-label'>Current Password</label>
                <input type="password" name="currentPassword" id="currentPassword" className='profile-input'></input>
                <label htmlFor="newPassword" className='profile-label'>New Password</label>
                <input type="password" name="newPassword" id="newPassword" className='profile-input'></input> */}
                <button type='submit' className='profile-button save-btn'>Save</button>
                <button onClick={()=> navigate("/profile")} className='profile-button'>Cancel</button>
            </form>
        </div>
    )
}

export default ProfileForm