import categoryCalls from '../../../../lib/category-api'

const DeleteCategoryButton = ({ categoryId, fetchCategories }) => {
    const handleDeleteCategory = async (id) => {
        await categoryCalls.deleteCategory(id)
        fetchCategories()
    }

    return (
        <>
            <button onClick={()=> handleDeleteCategory(categoryId)}>Delete</button>
        </>
    )
}

export default DeleteCategoryButton