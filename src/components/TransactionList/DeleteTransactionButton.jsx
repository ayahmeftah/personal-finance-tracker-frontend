import React from 'react'
import transactionsCalls from '../../../lib/transaction-api'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

const DeleteTransactionButton = ({ transactionID, getTransactionsByType }) => {

    const handleDelete = async (id) => {
        await transactionsCalls.deleteTransaction(id)
        getTransactionsByType()
    }

    return (
        <div>
            <button onClick={() => handleDelete(transactionID)}><HighlightOffOutlinedIcon/></button>
        </div>
    )
}

export default DeleteTransactionButton
