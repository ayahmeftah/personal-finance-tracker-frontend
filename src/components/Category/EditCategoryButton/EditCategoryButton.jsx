// import {useState} from 'react'
// import categoryCalls from '../../../../lib/category-api'

// const EditCategoryButton = ({categoryId, currentName, currentType, onUpdate}) => {
//     const [formData, setFormData] = useState({
//         name: currentName || '',
//         type: currentType || ''
//     })

//     const [isEditing, setIsEditing] = useState(false)
//     const [isSubmitting, setIsSubmitting] = useState(false)
    
//     const editForm = () => {
//         setFormData({
//             name: currentName,
//             type: currentType 
//         })
//         setIsEditing(true)
//     }

//     const handleFormChange = (event) => {
//         setFormData({...formData, [event.target.name]: event.target.value})
//     }

//     const handleSubmitForm = async (event) => {
//         event.preventDefault()
//         if (isSubmitting) return
//         try {
//             setIsSubmitting(true)
//             const result = await categoryCalls.updateCategory(categoryId, formData)
//             setIsEditing(false)
//             onUpdate(result)
//             setIsSubmitting(false)
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     return (
//         <>
//         <h1>Edit Category</h1>
//         <form onSubmit={handleSubmitForm} >
//         <label htmlFor="name">Category Name: </label>
//         <input 
//         name='name' 
//         id='name' 
//         value={formData.name} 
//         onChange={handleFormChange} 
//         autoComplete='off'
//         />
//         <label htmlFor="select-category-type">Category Type: </label>
//             <select 
//             name='type' 
//             id='select-category-type' 
//             value={formData.type}
//             onChange={handleFormChange}
//             >
//                 <option value='' disabled>Select type</option>
//                 <option value='income'>Income</option>
//                 <option value='expense'>Expense</option>
//             </select>
//             <button type='submit'>Update</button>
//         </form>
//         </>
//     )
// }

// export default EditCategoryButton

import { useNavigate } from "react-router"
const EditCategoryButton = ({setEditCategory, categoryId}) => {

    const navigate = useNavigate()
    const handleEditClick = (category) => {
      setEditCategory(category)
        navigate('/category/add')
  }

    return (
        <>
            <button onClick={() => handleEditClick(categoryId)}>Edit</button>
        </>
    )
}

export default EditCategoryButton