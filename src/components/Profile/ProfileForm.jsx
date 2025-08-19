import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router'
import userCalls from '../../../lib/user-api'

const ProfileForm = ({userId}) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        profilePic: ''
    })
    
    useEffect(() => {
        const data = async () => {
            try {
                const data = await userCalls.getUser(userId)
                setFormData({
                    name: data.name,
                    username: data.username,
                    profilePic: data.profilePic
                })
            } catch (error) {
                console.log({error: error.message})
            }
        }
        data()
    }, [userId])

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name] : event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await userCalls.updateUser(userId, formData)
            navigate('/profile')
        } catch (error) {
            console.log({error: error.message})
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name='name' value={formData.name} onChange={handleChange} placeholder='name'></input>
                <input name='username' value={formData.username} onChange={handleChange} placeholder='username'></input>
                <input name='profilePic' value={formData.profilePic} onChange={handleChange} placeholder='Profile Picture' accept="image/*"></input>
                <button>Save</button>
            </form>
        </>
    )
}

export default ProfileForm