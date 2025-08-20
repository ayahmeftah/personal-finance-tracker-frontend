const EditProfileButton = ({handleEditClick, userId}) => {
    return (
        <>
            <button onClick={() => handleEditClick(userId)}>Update Profile</button>
        </>
    )
}

export default EditProfileButton