import categoryCalls from '../../../../lib/category-api'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

const CategoryForm = (props) => {
    // const navigate = useNavigate()
    // const location = useLocation() 

    const [formData, setFormData] = useState({
        name: '',
        type: ''
    })

    useEffect(() => {
        if (props.editCategory) {
            setFormData({
                name: props.editCategory.name || '',
                type: props.editCategory.type || ''
            })
        }
    }, [props.editCategory])

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleFormChange = (event) => {
        event.preventDefault()
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmitForm = async (event) => {
        event.preventDefault()

        if (isSubmitting) return

        let response

        if (props.editCategory && props.editCategory._id) {
            response = await categoryCalls.updateCategory(props.editCategory._id, formData)
        } else {
            response = await categoryCalls.createCategory(formData)
        }

        if (response.status === 201 || response.status === 200) {
            setFormData({
                name: '',
                type: ''
            })
            props.setFormIsShown(false)
            props.fetchCategories()
        }

        setIsSubmitting(false)
    }

    return (
        <>
            <h1>{props.editCategory && props.editCategory._id ? 'Update Category' : 'Add Category'}</h1>
            <form onSubmit={handleSubmitForm} >
                <label htmlFor="name">Category Name: </label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    value={formData.name}
                    onChange={handleFormChange}
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
                <button type='submit'>{props.editCategory && props.editCategory._id ? 'Update' : 'Add'}</button>
                <button onClick={()=> props.setFormIsShown(false)}>Cancel</button>
            </form>
        </>
    )
}

export default CategoryForm