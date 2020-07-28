import React from 'react'
import RecipeReviewCard from '../RecipeCard'
import styles from "./search.module.css"

const RecipesList = (props) => {
    return (
        <div className={styles.recipesList}>
            {props.recipesList
                .filter((recipe) => {
                    return recipe.name
                        .toLowerCase()
                        .includes(props.filter.toLowerCase())
                })
                .filter((recipe) => {
                    return (
                        recipe.price >= props.priceMin &&
                        recipe.price <= props.priceMax
                    )
                })
                .filter((recipe) => {
                    switch (props.timeOfPreparation) {

                        case 10:
                            return recipe.readyInMinutes > 0 && recipe.readyInMinutes <= 30;
                        case 20:
                            return recipe.readyInMinutes >= 30 && recipe.readyInMinutes <= 45;
                        case 30:
                            return recipe.readyInMinutes >= 45;
                        default:
                            return recipe;
                    }
                })
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
                })}
        </div>
    )
}

export default RecipesList