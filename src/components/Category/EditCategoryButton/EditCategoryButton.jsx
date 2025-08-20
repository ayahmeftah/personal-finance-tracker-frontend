import { useNavigate } from "react-router"
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';


const EditCategoryButton = ({handleEditClick, category, categoryId}) => {

    return (
        <>
            <button className='edit-tran' onClick={() => handleEditClick(category)}><ModeEditOutlinedIcon sx={{ fontSize: 30 }}/></button>
        </>
    )
}

export default EditCategoryButton