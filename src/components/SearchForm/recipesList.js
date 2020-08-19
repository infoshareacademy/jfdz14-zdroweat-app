import React from 'react'
import RecipeReviewCard from '../RecipeCard'
import styles from "./search.module.css"

const RecipesList = ({ recipesList, currentPage, recipesPerPage }) => {
    const lastIndex = currentPage * recipesPerPage
    const firstIndex = lastIndex - recipesPerPage

    return (
        <div className={styles.recipesList}>
            {recipesList.slice(firstIndex, lastIndex)
                .map((recipe) => {

                    return (
                        <RecipeReviewCard
                            className={styles.recipeItem}
                            key={recipe.id}
                            id={recipe.id}
                            title={recipe.name}
                            photoURL={recipe.photoURL}
                            servings={recipe.servings}
                            price={recipe.price}
                            readyInMinutes={recipe.readyInMinutes}
                            recipe={recipe.recipe}
                        />
                    )
                })

            }
        </div>
    )
}

export default RecipesList