import categoryCalls from '../../../../lib/category-api'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import EmojiPicker from 'emoji-picker-react'

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
                    <option value=''>Select type</option>
                    <option value='income'>Income</option>
                    <option value='expense'>Expense</option>
                </select>
                <label>Category Emoji: </label>
                <div>
                    <button type="button" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                        {formData.emoji || 'Pick Emoji'}
                    </button>
                </div>
                {showEmojiPicker && (
                    <EmojiPicker onEmojiClick={handleEmojiClick} />
                )}
                <button type='submit'>{props.editCategory && props.editCategory._id ? 'Update' : 'Add'}</button>
                <button onClick={() => props.setFormIsShown(false)}>Cancel</button>
            </form>
        </>
    )
}

export default CategoryForm