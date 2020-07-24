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
    recipesList: recipes,
    filter: ""
  }

  handleOnFormChange = (textFilter) => {
    this.setState({
      filter: textFilter
    })
  }

  render() {
    return (
      <>
        <div className={styles.flexBar}>
          <BasicTextFields onFormChange={this.handleOnFormChange} filterValue={this.state.filter} />

          <RangeSlider />
          <ControlledOpenSelect />
          <OutlinedButtons />
        </div>
        <div className={styles.recipesList}>
          {
            this.state.recipesList
              .filter(recipe => {
                return recipe.name.toLowerCase().includes(this.state.filter.toLowerCase())
              })
              .map(recipe => {
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