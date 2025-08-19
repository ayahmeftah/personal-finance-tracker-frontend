import React from 'react'
import { useNavigate } from 'react-router'

const EditTransactionButton = ({transactionType, transactionToEdit}) => {
    const navigate = useNavigate()

    const handleEdit = (transaction) => {
        navigate(`/${transactionType}s/add`, { state: { transaction } })
    }

    return (
        <div>
            <button onClick={()=>handleEdit(transactionToEdit)}>Edit</button>
        </div>
    )
}

export default EditTransactionButton
