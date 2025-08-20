const EditProfileButton = ({handleEditClick, userId}) => {
    return (
        <>
            <button onClick={() => handleEditClick(userId)}>Edit Profile</button>
        </>
    )
}

export default EditProfileButton