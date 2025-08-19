import EditCategoryButton from "../EditCategoryButton/EditCategoryButton.jsx"
import { BeatLoader } from 'react-spinners'
import DeleteCategoryButton from "../DeleteCategoryButton/DeleteCategoryButton.jsx"

const CategoryList = (props) => {

    return (
        <>
            {
                props.loading ? (
                    <BeatLoader />
                ) :
                    props.categories.length > 0
                        ?
                        (
                            props.categories.map((category) => (
                                <li key={category._id}>
                                    <p>
                                        {category.emoji ? <span>{category.emoji} </span> : '💰'}
                                        {category.name}
                                    </p>
                                    <p>{category.type}</p>
                                    <div>
                                        <EditCategoryButton
                                            categoryId={category._id}
                                            fetchCategories={props.fetchCategories}
                                            category={category}
                                            handleEditClick={props.handleEditClick}
                                        />
                                        <DeleteCategoryButton
                                            categoryId={category._id}
                                            fetchCategories={props.fetchCategories}
                                        />
                                    </div>
                                </li>
                            ))
                        ) : (
                            <p>No categories yet!</p>
                        )
            }
        </>
    )
}

export default CategoryList