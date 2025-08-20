import userCalls from "../../../lib/user-api"
import { useState } from "react"

const DeleteProfileButton = ({ userId, handleDelete }) => {
    const [deleteProfile, setDeleteProfile] = useState(false)
    const handleDeleteProfileClick = async () => {

        await userCalls.deleteUser(userId)
        handleDelete()
        setDeleteProfile(false)
    }

    return (
        <>
            <button onClick={handleDeleteProfileClick}>Delete Profile</button>
        </>
    )
}

export default DeleteProfileButton