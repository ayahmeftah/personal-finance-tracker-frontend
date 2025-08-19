import userCalls from "../../../lib/user-api"

const EditProfileButton = ({userId}) => {
    const handleEditProfileClick = async () => {
        try {
            await userCalls.updateUser(userId)
            alert('Profile is updated')
        } catch (error) {
            console.log({error: error.message})
        }
    }
    
    return (
        <>
            <button onClick={handleEditProfileClick}>Update Profile</button>
        </>
    )
}

export default EditProfileButton