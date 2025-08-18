import {useState} from 'react'
import categoryCalls from '../../../../lib/category-api'

const EditCategoryButton = ({categoryId, currentName, currentType}) => {
    const [formData, setFormData] = useSate({
        name: currentName || '',
        type: currentType || ''
    })
    
    return (
        <>

        </>
    )
}

export default EditCategoryButton