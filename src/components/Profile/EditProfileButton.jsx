// import userCalls from "../../../lib/user-api"
// import {useNavigate} from 'react-router'

// const EditProfileButton = ({userId}) => {
//     const navigate = useNavigate()
//     const handleEditProfileClick = async (userId) => {
//         try {
//             await userCalls.updateUser(userId)
//             // alert('Profile is updated')
//             navigate('/profile')
//         } catch (error) {
//             console.log({error: error.message})
//         }
//     }
    
//     return (
//         <>
//             <button onClick={handleEditProfileClick}>Update Profile</button>
//         </>
//     )
// }

// export default EditProfileButton


const EditProfileButton = ({handleEditClick, userId}) => {
    return (
        <>
            <button onClick={() => handleEditClick(userId)}>Update Profile</button>
        </>
    )
}

export default EditProfileButton