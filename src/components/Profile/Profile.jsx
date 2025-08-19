import userCalls from '../../../lib/user-api'
import {useState, useEffect} from  'react'
import { useNavigate } from 'react-router'

const Profile = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    useEffect(async () => {
        const data = await userCalls.getUser()
        setUser(data)
    },[navigate])

    return (
        <>
            <h1>welcome, {user.username}</h1>
            <img src={user.profilePic} alt={user.profilePicPublicId}></img>
            <h2>{user.name}</h2>
            <EditProfileButton/>
            <DeleteProfileButton/>
        </>
    )
}

export default Profile