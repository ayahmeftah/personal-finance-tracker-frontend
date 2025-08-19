import { useNavigate } from "react-router"

const EditCategoryButton = ({handleEditClick, category, categoryId}) => {

    return (
        <>
            <button onClick={() => handleEditClick(category)}>Edit</button>
        </>
    )
}

export default EditCategoryButton