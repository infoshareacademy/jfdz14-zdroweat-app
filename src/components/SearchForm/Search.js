import React from 'react';
import RangeSlider from "./slider"
import ControlledOpenSelect from "./dropdown"
import BasicTextFields from "./inputSearch"
import { recipes } from "../../data/Recipes"
import RecipeReviewCard from "../RecipeCard"
import styles from "./search.module.css"




class Search extends React.Component {
  state = {
    recipesList: [],
    filter: ""
  }

  handleOnFormChange = (textFilter) => {
    this.setState({
      filter: textFilter
    })
  }

  componentDidMount() {
    this.setState({
      recipesList: recipes
    })
  }

  render() {
    return (
      <>
        <div className={styles.flexBar}>
          <BasicTextFields onFormChange={this.handleOnFormChange} filterValue={this.state.filter} />

          <RangeSlider />
          <ControlledOpenSelect />

        </div>
        <div className={styles.recipesList}>
          {
            this.state.recipesList
              .filter(recipe => {
                return recipe.name.toLowerCase().includes(this.state.filter.toLowerCase())
              })
              .map(recipe => {
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
          }
        </div>

      </>
    )
  }
}
export default Search