import React from 'react'
import { useNavigate } from 'react-router'
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';

const EditTransactionButton = ({transactionType, transactionToEdit}) => {
    const navigate = useNavigate()

    const handleEdit = (transaction) => {
        navigate(`/${transactionType}s/add`, { state: { transaction } })
    }

    return (
        <div>
            <button onClick={()=>handleEdit(transactionToEdit)}><ModeEditOutlinedIcon/></button>
        </div>
    )
}

export default EditTransactionButton
