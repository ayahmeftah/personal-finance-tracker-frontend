import { useNavigate } from "react-router"

const EditCategoryButton = ({handleEditClick, category}) => {

    return (
      
        <>
            <button onClick={() => handleEditClick(category)}>Edit</button>
        </>
    )
}

export default EditCategoryButton