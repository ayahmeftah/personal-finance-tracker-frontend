import userCalls from '../../../lib/user-api'
import {useState, useEffect} from  'react'
import { useNavigate } from 'react-router'
import EditProfileButton from './EditProfileButton'
import DeleteProfileButton from './DeleteProfileButton'

const Profile = (props) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    useEffect(() => {
        const getUser = async () => {
            try {
            const data = await userCalls.getUser()
            setUser(data)
        } catch (error) {
            console.log({error: error.message})
        }
        }
        getUser()

    },[])

    // if (!user) {
    //     return <p>Loading ...</p>
    // }

    const handleEditClick = (userId) => {
        navigate(`/profile/edit`)
    }

    const handleDelete = () => {
        navigate('/')
    }

    return (
        <>
            <h1>welcome, {user.username}</h1>
            {/* <img src={user.profilePic} alt={user.profilePicPublicId}></img>
            <h2>{user.name}</h2>
            <EditProfileButton userId={user._id} handleEditClick={handleEditClick}/>
            <DeleteProfileButton userId={user._id} handleDelete={handleDelete}/> */}
            {
                user.profilePic
                ?
                (
                <img src={user.profilePic} alt={userCalls.profilePicPublicId}/>
            ) : null }
            <h2>{user.name}</h2>
            <EditProfileButton userId={user._id} handleEditClick={handleEditClick}/>
            <DeleteProfileButton userId={user._id} handleDelete={handleDelete}/>
            
        </>
    )
}

export default Profile