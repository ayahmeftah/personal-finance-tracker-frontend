import userCalls from '../../../lib/user-api'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import EditProfileButton from './EditProfileButton'
import DeleteProfileButton from './DeleteProfileButton'

const Profile = () => {
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
        <div className='main-content'>
            <h1>Welcome, {user.name}</h1>
            <img
                src={user.profilePic || "/images/default-profile-img.jpg"}
                alt="Profile"
            />
            <h2>@{user.username}</h2>
            <EditProfileButton userId={user._id} handleEditClick={handleEditClick} editUser={editUser} />
            <DeleteProfileButton userId={user._id} handleDelete={handleDelete} />
        </div>
    )
}

export default Profile