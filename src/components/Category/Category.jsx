import React from 'react'
import { useState, useEffect } from 'react'
import CategoryList from '../Category/CategoryList/CategoryList'
import CategoryForm from '../Category/CategoryForm/CategoryForm'
import categoryCalls from '../../../lib/category-api'

const Category = () => {

    const [formIsShown, setFormIsShown] = useState(false)
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    const [editCategory, setEditCategory] = useState(null)

    const handleAddClick = () => {
        setFormIsShown(true)
        setEditCategory(null)
    }

    const handleEditClick = (category) => {
        setEditCategory(category)
        setFormIsShown(true)
    }

    const fetchCategories = async () => {
        const data = await categoryCalls.getAllCategories()
        if (!data || !Array.isArray(data)) {
            setCategories([])
        } else {
            setCategories(data)
        }
        setLoading(false)
    }

    useEffect(() => {

        fetchCategories()
    }, [])

    return (
        <div className='main-content'>
            <h1>Categories</h1>
            <button onClick={handleAddClick}>Add New Category</button>
            {
                formIsShown
                    ?
                    <CategoryForm setFormIsShown={setFormIsShown} loading={loading} editCategory={editCategory} fetchCategories={fetchCategories} />
                    :
                    null
            }
            <CategoryList categories={categories} fetchCategories={fetchCategories} handleEditClick={handleEditClick} setEditCategory={setEditCategory} setFormIsShown={setFormIsShown}/>

        </div>
    )
}

export default Category
