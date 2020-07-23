import React from "react";
import RecipeReviewCard from './RecipeCard';
import MyRecipeCard from './MyRecipeCard';
import FullRecipeCard from './FullRecipeCard';
import { recipes } from "../data/Recipes";
import styles from './styles.module.css';

const MyFavouriteList = () => {
    return (
        <div>
            <h1>Twoje ulubione przepisy</h1>
            <FullRecipeCard />
        </div>
    )
}

export default MyFavouriteList;