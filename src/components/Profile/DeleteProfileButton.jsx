import userCalls from "../../../lib/user-api"
// import {useNavigate} from 'react-router'

const DeleteProfileButton = ({userId, handleDelete}) => {
    const handleDeleteProfileClick = async () => {
        try {
            await userCalls.deleteUser(userId)
            handleDelete()            
        } catch (error) {
            console.log({error: error.message})
        }
    }
    
    return (
        <>
            <button onClick={handleDeleteProfileClick}>Delete Profile</button>
        </>
    )
}

export default DeleteProfileButton