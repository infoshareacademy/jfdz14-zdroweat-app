import React from "react";
import RecipeReviewCard from './RecipeCard';
import { recipes } from "../data/Recipes";
import styles from './styles.module.css';

const RecipeCards = () => {
    return (
        <>
            <div className={styles.recipeContainer}>
                {
                    recipes.map(recipe => {
                        return (
                            <RecipeReviewCard
                                key={recipe.id}
                                title={recipe.name}
                                photoURL={recipe.photoURL}
                                servings={recipe.servings}
                                price={recipe.price}
                                readyInMinutes={recipe.readyInMinutes}
                                recipe={recipe.recipe}
                            />
                        )
                    })
            </div>
        </>
    );
};

export default RecipeCards;