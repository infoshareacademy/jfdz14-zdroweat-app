import React from "react";
import FullRecipeCard from './FullRecipeCard';
import { recipes } from "../data/Recipes";
import styles from './styles.module.css';
import Auth from './Auth';

const MyFavouriteList = () => {
    let favourites = [];
        for(let i = 0; i < 30; i++){
            favourites.push(localStorage.key(i));
        }
        
    return (  
        <Auth>         
            <h1 className={styles.header}>Twoje ulubione przepisy</h1>
            <div className={styles.recipesList}>
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
        </Auth>
    )
}

export default MyFavouriteList;