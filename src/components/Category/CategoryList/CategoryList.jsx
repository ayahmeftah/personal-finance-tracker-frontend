import EditCategoryButton from './EditCategoryButton/EditCategoryButton'
import getAllCategories from '../../../../lib/category-api'
const categoryList = () => {
    
    return (
        <>
            <h1>Categories</h1>
            {
                getAllCategories.length
                ?
                getAllCategories.map((category) => {
                    return (
                        <>
                            <p>{category.name}</p>
                            <p>{category.type}</p>
                            <EditCategoryButton categoryId={category._id}/>
                        </>
                    )
                })
                :
                <p>No categories yet!</p>
            }
        </>
    )
}

export default categoryList