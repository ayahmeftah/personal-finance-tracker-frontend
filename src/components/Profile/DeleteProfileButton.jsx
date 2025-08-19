import userCalls from "../../../lib/user-api"

const DeleteProfileButton = ({userId}) => {
    const handleDeleteProfileClick = async () => {
        await userCalls.deleteUser(userId)
    }
    
    return (
        <>
            <button onClick={() => {handleDeleteProfileClick}}>Delete Profile</button>
        </>
    )
}

export default DeleteProfileButton