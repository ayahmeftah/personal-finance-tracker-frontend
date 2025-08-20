import categoryCalls from '../../../../lib/category-api'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

const DeleteCategoryButton = ({ categoryId, fetchCategories }) => {
    const handleDeleteCategory = async (id) => {
        await categoryCalls.deleteCategory(id)
        fetchCategories()
    }

    return (
        <>
            <button className='delete-tran' onClick={()=> handleDeleteCategory(categoryId)}><HighlightOffOutlinedIcon sx={{ fontSize: 30 }}/></button>
        </>
    )
}

export default DeleteCategoryButton