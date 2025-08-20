import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router'
import userCalls from '../../../lib/user-api'

const ProfileForm = (props) => {
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState(null)
    // const [picState, setPicState] = useState({
    //     profilePic: ''
    // })
    const [selectedFile, setSelectedFile] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        profilePic: ''
    })
    
    const [isSubmitting, setIsSubmitting] = useState(false)

    // useEffect(() => {
    //     const data = async () => {
    //         try {
    //             const data = await userCalls.getUser()
    //             setCurrentUser(data)
    //             setFormData({
    //                 name: data.name || '',
    //                 username: data.username || '',
    //                 profilePic: data.profilePic || ''
    //             })
    //         } catch (error) {
    //             console.log({error: error.message})
    //         }
    //     }
    //     data()
    // }, [userId])

    useEffect(() => {
        if (props.editUser) {
            setFormData({
                name: props.editUser.name || '',
                username: props.editUser.username || '',
                profilePic: props.editUser.profilePic || ''
            })
        }
    }, [props.editUser])

    const handleChange = (event) => {
        event.preventDefault()
        setFormData({...formData, [event.target.name] : event.target.value})
    }

    // const handlePictureChange = (event) => {
    //     // let reader = new FileReader()
    //     // reader.readAsDataURL(event.target.files[0])
    //     // reader.onload = (event) => {
    //     //     let img = event.target.result
    //     //     setPicState({
    //     //         profilePic: img
    //     //     })
    //     // }
    //     const newUser = userCalls.updateUser(data)
    //     setSelectedFile(event.target.files[0])
    // }

    const handleSubmit = async (event) => {
        // event.preventDefault()
        // try {
        //     await userCalls.updateUser(formData)
        //     navigate('/profile')
        // } catch (error) {
        //     console.log({error: error.message})
        // }

        event.preventDefault()
        if (isSubmitting) return
        let response = await userCalls.updateUser
        if (response.status === 201 || response.status === 200) {
            setFormData({
                name: '',
                username: '',
                profilePic: ''
            })
        }
        setIsSubmitting(false)
    }

    return (
        <>
            <h2>Update User Profile</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name: </label>
                <input name='name' value={formData.name} onChange={handleChange} placeholder='name'></input>
                <label htmlFor='username'>Username: </label>
                <input name='username' value={formData.username} onChange={handleChange} placeholder='username'></input>
                <label htmlFor='profilePic'>Profile Pic: </label>     
                <input name='profilePic' onChange={handleChange} placeholder='Profile Picture' accept="image/*" type='file'></input>
                <button>Save</button>
            </form>
        </>
    )
}

export default ProfileForm