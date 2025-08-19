import EditCategoryButton from "../EditCategoryButton/EditCategoryButton.jsx"
import categoryCalls from '../../../../lib/category-api'
import { BeatLoader } from 'react-spinners'
import {useEffect, useState} from 'react'
import DeleteCategoryButton from "../DeleteCategoryButton/DeleteCategoryButton.jsx"

const CategoryList = ({setEditCategory}) => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        
        fetchCategories()
    }, [])

    return (
        <>
            <h1>Categories</h1>
            <button>+ Add Category</button>
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
                                <EditCategoryButton categoryId={category._id} setEditCategory={setEditCategory}/>
                                <DeleteCategoryButton categoryId={category._id}/>
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