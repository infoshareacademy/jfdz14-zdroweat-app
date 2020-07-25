import React from "react";
import FullRecipeCard from './FullRecipeCard';
import { recipes } from "../data/Recipes";
import styles from './styles.module.css';

const MyFavouriteList = () => {
    let favourites = [];
        for(let i = 0; i < 20; i++){
            favourites.push(localStorage.key(i))
        }
    console.log(favourites);
        
    return (
        <>
            <h1>Twoje ulubione przepisy</h1>
            <div className={styles.recipeContainer}>
                {
                    recipes.map(recipe => {
                        if(favourites.includes(recipe.name)){
                            return (
                                <FullRecipeCard
                                    title={recipe.name}
                                    photoURL={recipe.photoURL}
                                    servings = {recipe.servings}
                                    price = {recipe.price}
                                    readyInMinutes = {recipe.readyInMinutes}
                                    recipe = {recipe.recipe}
                                    />
                            )
                        }
                    
                    })
                }
            </div>
        </>
    )
}

export default MyFavouriteList;