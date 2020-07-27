import React from 'react';
import RangeSlider from "./slider"
import ControlledOpenSelect from "./dropdown"
import BasicTextFields from "./inputSearch"
import { recipes } from "../../data/Recipes"
import RecipeReviewCard from "../RecipeCard"
import styles from "./search.module.css"

const compareNumbers = (a, b) => {
  return a - b
}
const getStartRange = recipes.map((recipe) => {
  return recipe.price
}).sort(compareNumbers)


class Search extends React.Component {
  state = {
    recipesList: [],
    filter: "",
    priceMin: getStartRange[0],
    priceMax: getStartRange[getStartRange.length - 1],
  }


  handleOnSliderChange = (upDateRange) => {

    this.setState({
      priceMin: upDateRange[0],
      priceMax: upDateRange[1]
    })
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
          <BasicTextFields
            onFormChange={this.handleOnFormChange}
            filterValue={this.state.filter}
          />

          <RangeSlider
            onSliderChange={this.handleOnSliderChange}
            initialValueMin={this.state.priceMin}
            initialValueMax={this.state.priceMax}
          />

          <ControlledOpenSelect />

        </div>
        <div className={styles.recipesList}>
          {
            this.state.recipesList
              .filter(recipe => {
                return recipe.name.toLowerCase().includes(this.state.filter.toLowerCase())
              })
              .filter(recipe => {
                return recipe.price >= this.state.priceMin && recipe.price <= this.state.priceMax
              })
              .map(recipe => {
                return (
                  <RecipeReviewCard
                    className={styles.recipeItem}
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