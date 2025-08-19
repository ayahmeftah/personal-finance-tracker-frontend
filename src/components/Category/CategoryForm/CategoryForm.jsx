import categoryCalls from '../../../../lib/category-api'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

const CategoryForm = ({ editCategory }) => {
    const navigate = useNavigate()
    // const location = useLocation() 

    const [formData, setFormData] = useState({
        name: '',
        type: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleFormChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmitForm = async (event) => {
        event.preventDefault()

        // if (!formData.name || !formData.type) {
        //     alert('Please fill all fields')
        //     return
        // }
        
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
        navigate('/categories')
    }

    useEffect(() => {
        if (editCategory) {
            setFormData({
                name: editCategory.name || '',
                type: editCategory.type || ''
            })
        }
    }, [editCategory])


    return (
        <>
            <h1>{editCategory && editCategory._id ? 'Update Category' : 'Add Category'}</h1>
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
                <button type='submit'>{editCategory && editCategory._id ? 'Update' : 'Add'}</button>
            </form>
        </>
    )
}

export default CategoryForm