import React from 'react';
import RangeSlider from "./slider"
import ControlledOpenSelect from "./dropdown"
import BasicTextFields from "./inputSearch"
import OutlinedButtons from './button';

import { recipes } from "../../data/Recipes"
import RecipeReviewCard from "../RecipeCard"
import styles from "./search.module.css"




class SearchContainer extends React.Component {
  state = {
    filter: ""
  }



  render() {
    return (
      <>
        <div className={styles.flexBar}>
          <BasicTextFields />
          <RangeSlider />
          <ControlledOpenSelect />
          <OutlinedButtons />
        </div>
        <div className={styles.recipesList}>
          {
            recipes.map(recipe => {
              return (
                <div className={styles.recipeCard}>
                  <RecipeReviewCard
                    key={recipe.id}
                    title={recipe.name}
                    readyInMinutes={recipe.readyInMinutes}
                    photoURL={recipe.photoURL}
                    servings={recipe.servings}
                    price={recipe.price}
                  />

                </div>
              )
            })
          }
        </div>

      </>
    )
  }
}
export default SearchContainer