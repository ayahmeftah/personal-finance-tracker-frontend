import categoryCalls from '../../../../lib/category-api'
// import {getAllCategories} from '../../../../lib/category-api'

const DeleteCategoryButton = ({categoryId}) => {
    const handleDeleteCategory = async () =>{
        await categoryCalls.deleteCategory(categoryId)
        // getAllCategories()
    }
    
    return (
        <>
            <button onClick={handleDeleteCategory}>Delete</button>
        </>
    )
}

export default DeleteCategoryButton