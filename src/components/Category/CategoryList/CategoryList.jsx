import EditCategoryButton from "../EditCategoryButton/EditCategoryButton.jsx"
import { BeatLoader } from 'react-spinners'
import DeleteCategoryButton from "../DeleteCategoryButton/DeleteCategoryButton.jsx"
import './CategoryList.css'

const CategoryList = (props) => {

    return (
        <div className="category-list-card">
            {
                props.loading ? (
                    <BeatLoader />
                ) :
                    props.categories.length > 0
                        ?
                        (
                            props.categories.map((category) => (
                                <li key={category._id}>
                                    <div className="category-info">
                                        <span className="emoji">{category.emoji ? <span>{category.emoji} </span> : '💰'}</span>
                                        <div>
                                            <span className="name">{category.name}</span>
                                            <span className="type">{category.type}</span>
                                        </div>
                                    </div>
                                    <div className="action-buttons">
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
                            <p className="empty-text">No categories yet!</p>
                        )
            }
        </div>
    )
}

export default CategoryList