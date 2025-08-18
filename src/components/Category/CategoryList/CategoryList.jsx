import EditCategoryButton from "../EditCategoryButton/EditCategoryButton.jsx"
import categoryCalls from '../../../../lib/category-api'
import { BeatLoader } from 'react-spinners'
import {useEffect, useState} from 'react'

const CategoryList = ({handleEditClick}) => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCategories = async () => {
            const data = await categoryCalls.getAllCategories()
            setCategories(Array.isArray(data) ? data : [])
            setLoading(false)
        }
        fetchCategories()
    }, [])

    return (
        <>
            <h1>Categories</h1>
            {
                loading ? (
                    <BeatLoader/>
                ) : 
                categories.length > 0 
                ? 
                (
                    categories.map((category) => (
                        <li key={category._id}>
                            <p>{category.name}</p>
                            <p>{category.type}</p>
                            <div>
                                <EditCategoryButton categoryId={category._id} handleEditClick={handleEditClick}/>
                            </div>
                        </li>
                    ))
                ) : (
                    <p>No categories yet!</p>
                )
            }
        </>
    )
}

export default CategoryList