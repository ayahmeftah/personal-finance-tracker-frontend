import {useState} from 'react'
import categoryCalls from '../../../../lib/category-api'

const EditCategoryButton = ({categoryId, currentName, currentType, onUpdate}) => {
    const [formData, setFormData] = useState({
        name: currentName || '',
        type: currentType || ''
    })

    const [isEditing, setIsEditing] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    
    const editForm = () => {
        setFormData({
            name: currentName,
            type: currentType 
        })
        setIsEditing(true)
    }

    const handleSubmitForm = async (event) => {
        event.preventDefault()
    }

    return (
        <>

        </>
    )
}

export default EditCategoryButton