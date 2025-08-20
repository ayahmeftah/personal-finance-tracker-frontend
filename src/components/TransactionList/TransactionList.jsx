import React from 'react'
import { useState, useEffect } from 'react'
import transactionsCalls from '../../../lib/transaction-api'
import EditTransactionButton from './EditTransactionButton'
import DeleteTransactionButton from './DeleteTransactionButton'
import './TransactionList.css'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';


const TransactionList = ({ transactionType }) => {
    const [transactions, setTransactions] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("all")

    const getTransactionsByType = async () => {
        const res = await transactionsCalls.getAllTransactions()
        if (!res.error) {
            setTransactions(res.filter(t => t.transactionType === transactionType))
        }
    }

    useEffect(() => {
        getTransactionsByType()
    }, [transactionType])

    const uniqueCategories = transactions.map(transaction => transaction.categoryId).filter((category, index, self) =>
        category && index === self.findIndex(c => c._id === category._id)
    )

    const filteredTransactions =
        selectedCategory === "all" ? transactions
            : transactions.filter(transaction => transaction.categoryId?._id === selectedCategory)

    /*
    This code is refrenced from stackoverflow foe downloading transactions
    https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side
    */
    const downloadCSV = () => {
        if (!transactions || transactions.length === 0) return

        const headers = ["Name", "Category", "Type", "Amount", "Date"]
        const rows = transactions.map(t => [
            t.name,
            t.categoryId?.name || "",
            t.transactionType,
            t.amount,
            new Date(t.date).toLocaleDateString("en-GB")
        ])

        const csvContent = [
            headers.join(","),
            ...rows.map(r => r.join(","))
        ].join("\n")

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
        const url = URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.setAttribute("href", url)
        const filename = `${transactionType}_report.csv`
        link.setAttribute("download", filename)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <div className="transaction-list-card">
            <div className="transaction-list-header">
                <button className='download-btn' onClick={downloadCSV}><DownloadOutlinedIcon/> Download</button>
                <select
                    value={selectedCategory}
                    onChange={(event) => setSelectedCategory(event.target.value)}
                    className="filter-select"
                >
                    <option value="all">All Categories</option>
                    {uniqueCategories.map((category) => (
                        <option key={category._id} value={category._id}>
                            {category.emoji} {category.name}
                        </option>
                    ))}
                </select>


            </div>

            {filteredTransactions.length === 0 ? (
                <p className="empty-text">No {transactionType}s yet</p>
            ) : (
                <ul>
                    {filteredTransactions.map((transaction) => (
                        <li key={transaction._id} className={transaction.transactionType}>
                            <div className="transaction-info">
                                <span className="emoji">{transaction.categoryId?.emoji}</span>
                                <div>
                                    <span className="name">{transaction.name}</span>
                                    <span className="date">
                                        {new Date(transaction.date).toLocaleDateString("en-GB", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric"
                                        })}
                                    </span>
                                </div>
                            </div>

                            <span className={`amount ${transaction.transactionType}`}>
                                {transaction.transactionType === "income" ? "+" : "-"}${transaction.amount}
                            </span>
                            <div className="action-buttons">
                                <EditTransactionButton
                                    transactionToEdit={transaction}
                                    transactionType={transactionType}
                                />
                                <DeleteTransactionButton
                                    transactionID={transaction._id}
                                    getTransactionsByType={getTransactionsByType}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default TransactionList
