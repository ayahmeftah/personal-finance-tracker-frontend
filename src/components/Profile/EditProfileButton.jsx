import userCalls from "../../../lib/user-api"

const EditProfileButton = ({userId}) => {
    const handleEditProfileClick = async () => {
        await userCalls.updateUser(userId)
    }
    
    return (
        <>
            <button onClick={() => {handleEditProfileClick}}>Update Profile</button>
        </>
    )
}

export default EditProfileButton