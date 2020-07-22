import React from "react";
import RecipeReviewCard from './RecipeCard';
import { recipes } from "../data/Recipes";
import styles from './styles.module.css';

const RecipeCards = () => {
    return (
        <>
            <div className="recipe-container">
                {
                    recipes.map(recipe => {
                        return (
                            <RecipeReviewCard 
                                title={recipe.name}
                                readyInMinutes = {recipe.readyInMinutes}
                                photoURL = {recipe.photoURL}
                                servings = {recipe.servings}
                                price = {recipe.price}
                                />
                        )
                    })
                }
            </div>
        </>
    );
};

export default RecipeCards;