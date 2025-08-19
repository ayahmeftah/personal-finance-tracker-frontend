import categoryCalls from '../../../../lib/category-api'

const DeleteCategoryButton = ({ categoryId, fetchCategories }) => {
    const handleDeleteCategory = async () => {
        await categoryCalls.deleteCategory(categoryId)
        fetchCategories()
    }

    return (
        <>
            <button onClick={handleDeleteCategory}>Delete</button>
        </>
    )
}

export default DeleteCategoryButton