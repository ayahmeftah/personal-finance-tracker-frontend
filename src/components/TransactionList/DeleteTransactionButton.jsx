import React from 'react'
import transactionsCalls from '../../../lib/transaction-api'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import './TransactionList.css'

const DeleteTransactionButton = ({ transactionID, getTransactionsByType }) => {

    const handleDelete = async (id) => {
        await transactionsCalls.deleteTransaction(id)
        getTransactionsByType()
    }

    return (
        <div>
            <button className='delete-tran' onClick={() => handleDelete(transactionID)}><HighlightOffOutlinedIcon sx={{ fontSize: 30 }}/></button>
        </div>
    )
}

export default DeleteTransactionButton
