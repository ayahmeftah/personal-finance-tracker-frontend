import userCalls from "../../../lib/user-api"
import { useState } from "react"

const DeleteProfileButton = ({userId, handleDelete}) => {
    const [deleteProfile, setDeleteProfile] = useState(false)
    const handleDeleteProfileClick = async () => {
        const response = window.confirm('Are you sure you want to delete your profile?')
        if (!response) return setDeleteProfile(true)
        try {
            await userCalls.deleteUser(userId)
            handleDelete()        
        } catch (error) {
            console.log({error: error.message})
        }
        setDeleteProfile(false)
    }
    
    return (
        <>
            <button onClick={handleDeleteProfileClick}>Delete Profile</button>
        </>
    )
}

export default DeleteProfileButton