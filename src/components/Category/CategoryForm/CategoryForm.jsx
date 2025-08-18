import categoryCalls from '../../../../lib/category-api'
import {useState} from 'react'

const CategoryForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        type: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleFormChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmitForm = async (event) => {
        event.preventDefault()
        // let response = await categoryCalls.createCategory(formData) 
        // if (response.status === 201 || response.status === 200) {
        //     setFormData({
        //         name: '',
        //         type: ''
        //     })   
        //     }
        if (!formData.name || !formData.type) {
            alert('Please fill all fields')
            return
        }
            if (isSubmitting) return
        try {
            setIsSubmitting(true)
            const result = await categoryCalls.createCategory(formData)
            console.log('createCategory -> ', result)
            setFormData({
                name: '',
                type: ''
            })
        } catch (error) {
            console.log(error)
        }
    } 


    return (
       <>
       <h1>Add Category</h1>
        <form onSubmit={handleSubmitForm} >
        <label htmlFor="name">Category Name: </label>
        <input 
        name='name' 
        id='name' 
        value={formData.name} 
        onChange={handleFormChange} 
        autoComplete='off'
        />
        <label htmlFor="select-category-type">Category Type: </label>
            <select 
            name='type' 
            id='select-category-type' 
            value={formData.type}
            onChange={handleFormChange}
            >
                <option value='' disabled>Select type</option>
                <option value='income'>Income</option>
                <option value='expense'>Expense</option>
            </select>
            <button type='submit'>Add</button>
        </form>
       </> 
    ) 
}

export default CategoryForm