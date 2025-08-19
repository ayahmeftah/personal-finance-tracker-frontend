import React from 'react'
import transactionsCalls from '../../../lib/transaction-api'

const DeleteTransactionButton = ({transactionID, getTransactionsByType}) => {

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this transaction?")) {
            await transactionsCalls.deleteTransaction(id)
            getTransactionsByType()
        }
    }

    return (
        <div>
            <button onClick={()=>handleDelete(transactionID)}>Delete</button>
        </div>
    )
}

export default DeleteTransactionButton
