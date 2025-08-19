import React from 'react'
import transactionsCalls from '../../../lib/transaction-api'

const DeleteTransactionButton = ({ transactionID, getTransactionsByType }) => {

    const handleDelete = async (id) => {
        await transactionsCalls.deleteTransaction(id)
        getTransactionsByType()
    }

    return (
        <div>
            <button onClick={() => handleDelete(transactionID)}>Delete</button>
        </div>
    )
}

export default DeleteTransactionButton
