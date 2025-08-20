import categoryCalls from '../../../../lib/category-api'
import { useState, useEffect } from 'react'
import EmojiPicker from 'emoji-picker-react'
import './CategoryForm.css'

const CategoryForm = (props) => {

    const [formData, setFormData] = useState({
        name: '',
        type: '',
        emoji: ''
    })

    useEffect(() => {
        if (props.editCategory) {
            setFormData({
                name: props.editCategory.name || '',
                type: props.editCategory.type || '',
                emoji: props.editCategory.emoji || ''
            })
        }
    }, [props.editCategory])

    const [isSubmitting, setIsSubmitting] = useState(false)

    const [showEmojiPicker, setShowEmojiPicker] = useState(false)

    const handleEmojiClick = (emojiData) => {
        setFormData({ ...formData, emoji: emojiData.emoji })
        setShowEmojiPicker(false)
    }


    const handleFormChange = (event) => {
        event.preventDefault()
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmitForm = async (event) => {
        event.preventDefault()

        if (isSubmitting) return

        let response

        if (props.editCategory && props.editCategory._id) {
            response = await categoryCalls.updateCategory(formData, props.editCategory._id)
        } else {
            response = await categoryCalls.createCategory(formData)
        }

        if (response.status === 201 || response.status === 200) {
            setFormData({
                name: '',
                type: '',
                emoji: ''
            })
        }
        props.fetchCategories()
        props.setFormIsShown(false)

        setIsSubmitting(false)
    }

    return (
        <div className='category-form-container'>
            <h1 className='category-title'>{props.editCategory && props.editCategory._id ? 'Update Category' : 'Add Category'}</h1>
            <form onSubmit={handleSubmitForm}  className='category-form'>
                <label htmlFor="name"  className='category-label'>Category Name: </label>
                <input
                    className='category-input'
                    type='text'
                    name='name'
                    id='name'
                    value={formData.name}
                    onChange={handleFormChange}
                />
                <label htmlFor="select-category-type"  className='category-label'>Category Type: </label>
                <select
                    className='category-select'
                    name='type'
                    id='select-category-type'
                    value={formData.type}
                    onChange={handleFormChange}
                >
                    <option value=''  className='category-option'>Select type</option>
                    <option value='income'  className='category-option'>Income</option>
                    <option value='expense'  className='category-option'>Expense</option>
                </select>
                <label  className='category-label'>Category Emoji: </label>
                <div>
                    <button type="button" onClick={() => setShowEmojiPicker(!showEmojiPicker)}  className='category-button'>
                        {formData.emoji || 'Pick Emoji'}
                    </button>
                </div>
                {showEmojiPicker && (
                    <EmojiPicker onEmojiClick={handleEmojiClick} />
                )}
                <button type='submit'  className='category-button'>{props.editCategory && props.editCategory._id ? 'Update' : 'Add'}</button>
                <button onClick={() => props.setFormIsShown(false)}  className='category-button'>Cancel</button>
            </form>
        </div>
    )
}

export default CategoryForm