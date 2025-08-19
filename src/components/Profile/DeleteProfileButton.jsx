import userCalls from "../../../lib/user-api"

const DeleteProfileButton = ({userId}) => {
    const handleDeleteProfileClick = async () => {
        try {
            const confirm = window.prompt('Are you sure you want to delete your account? ')
            if (confirm === 'yes') {
                await userCalls.deleteUser(userId)
                alert('account deleted succesfully')
            }
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