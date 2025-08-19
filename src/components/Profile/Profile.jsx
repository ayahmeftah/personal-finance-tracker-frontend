import userCalls from '../../../lib/user-api'
import {useState, useEffect} from  'react'
import { useNavigate } from 'react-router'
import EditProfileButton from './EditProfileButton'
import DeleteProfileButton from './DeleteProfileButton'

const Profile = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    useEffect(async () => {
        const getUser = async () => {
            try {
            const data = await userCalls.getUser()
            setUser(data)
        } catch (error) {
            console.log({error: error.message})
        }
        }
        getUser()

    },[navigate])

    return (
        <>
            <h1>welcome, {user.username}</h1>
            <img src={user.profilePic} alt={user.profilePicPublicId}></img>
            <h2>{user.name}</h2>
            <EditProfileButton userId={user._id}/>
            <DeleteProfileButton userId={user._id}/>
        </>
    )
}

export default Profile