import categoryCalls from '../../../../lib/category-api'
import {useState, useEffect} from 'react'

const CategoryForm = () => {
    const [categoryToEdit, SetCategoryToEdit] = useState(null)
    
    const [formData, setFormData] = useState({
        name: '',
        type: ''
    })

    useEffect(() => {
        if (categoryToEdit) {
            setFormData({
                name: categoryToEdit.name || '',
                type: categoryToEdit.type || ''
            })
        }
    }, [categoryToEdit])
    
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleFormChange = (event) => {
        event.preventDefault()
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmitForm = async (event) => {
        event.preventDefault()
        if (isSubmitting) return 
        setIsSubmitting(true)
        let response 
        if (categoryToEdit && categoryToEdit._id) {
            response = await categoryCalls.updateCategory(categoryToEdit._id, formData)
        }
    } 
    
    return (
       <>
       <h1>{categoryToEdit && categoryToEdit._id ? 'Edit Category' : 'Add Category'}</h1>
        <form onSubmit={handleSubmitForm} >
        <label htmlFor="name">Category Name: </label>
        <input class='name' id='name' value={formData.name}></input>
        <label htmlFor="type">Category Type: </label>
        <input class='type' id='type' value={formData.title}>
            <select>
                <option></option>
                <option></option>
            </select>
        </input>
        </form>
        <button>{categoryToEdit && categoryToEdit._id ? 'update' : 'add'}</button>
       </> 
    ) 
}

export default CategoryForm