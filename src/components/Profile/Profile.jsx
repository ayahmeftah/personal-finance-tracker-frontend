import userCalls from '../../../lib/user-api'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import EditProfileButton from './EditProfileButton'
import DeleteProfileButton from './DeleteProfileButton'
import './Profile.css'

const Profile = ({ handleLogout }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [editUser, setEditUser] = useState(null)

    useEffect(() => {
        const getUser = async () => {
            try {
                const data = await userCalls.getUser()
                setUser(data)
            } catch (error) {
                console.log({ error: error.message })
            }
        }
        getUser()

    }, [])

    if (!user) {
        return <p>Loading ...</p>
    }

    const handleEditClick = () => {
        navigate(`/profile/edit`)
    }

    const handleDelete = () => {
        navigate('/signup')
    }

    return (
        <div className="profile-container">
            <h1 className="profile-name">Welcome, {user.name}</h1>

            <img
                className="profile-pic"
                src={user.profilePic || "/images/default-profile-img.jpg"}
                alt="Profile"
            />

            <h2 className="profile-username">@{user.username}</h2>

            <div className="profile-actions">
                <EditProfileButton
                    userId={user._id}
                    handleEditClick={handleEditClick}
                    editUser={editUser}
                />
                <DeleteProfileButton
                    userId={user._id}
                    handleDelete={handleDelete}
                />
                <button className="btn-dashboard" onClick={() => navigate("/")}>
                    Back to Dashboard
                </button>
                <button className="btn-logout" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Profile