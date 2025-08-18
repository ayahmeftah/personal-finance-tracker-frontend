import categoryCalls from '../../../../lib/category-api'
import {useState, useEffect} from 'react'

const CategoryForm = () => {
    // const [categoryToEdit, SetCategoryToEdit] = useState(null)
    
    const [formData, setFormData] = useState({
        name: '',
        type: ''
    })

    // useEffect(() => {
    //     if (categoryToEdit) {
    //         setFormData({
    //             name: categoryToEdit.name || '',
    //             type: categoryToEdit.type || ''
    //         })
    //     }
    // }, [categoryToEdit])
    
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleFormChange = (event) => {
        event.preventDefault()
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmitForm = async (event) => {
        event.preventDefault()
        if (isSubmitting) return 
        setIsSubmitting(true)
        let response = await categoryCalls.createCategory(formData) 
        // if (categoryToEdit && categoryToEdit._id) {
        //     response = await categoryCalls.updateCategory(categoryToEdit._id, formData)
        // } else {
        //     response = await categoryCalls.createCategory(formData)
        // }

        if (response.status === 201 || response.status === 200) {
            setFormData({
                name: '',
                type: ''
            })   
        }
        setIsSubmitting(false)
    } 

    
    
    return (
       <>
       {/* <h1>{categoryToEdit && categoryToEdit._id ? 'Edit Category' : 'Add Category'}</h1> */}
       <h1>Add Category</h1>
        <form onSubmit={handleSubmitForm} >
        <label htmlFor="name">Category Name: </label>
        <input className='name' id='name' value={formData.name} onChange={handleFormChange}></input>
        <label htmlFor="type">Category Type: </label>
            <select id='select-category-type' value={formData.type} onChange={handleFormChange}>
                <option value="">Select type</option>
                <option value='income'>Income</option>
                <option value='expense'>Expense</option>
            </select>
        </form>
        {/* <button>{categoryToEdit && categoryToEdit._id ? 'update' : 'add'}</button> */}
        <button>Add</button>
       </> 
    ) 
}

export default CategoryForm