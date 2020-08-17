import React from 'react'
import RangeSlider from './slider'
import ControlledOpenSelect from './dropdown'
import BasicTextFields from './inputSearch'
import { recipes } from '../../data/Recipes'
import RecipesList from "./recipesList"
import styles from './search.module.css'
import BasicPagination from './pagination'
import ViewOption from './recipesPerPage'


const getStartRange = recipes
  .map((recipe) => {
    return recipe.price
  })
  .sort((a, b) => a - b)

class Search extends React.Component {
  state = {

    recipesList: recipes,

    filter: '',
    priceMin: getStartRange[0],
    priceMax: getStartRange[getStartRange.length - 1],
    timeToPrepare: 0,
    currentPage: 1,
    recipesPerPage: 8,
  }

  applyFilter = () => {
    this.setState({
      recipesList: recipes.filter(recipe => {
        return (recipe.name
          .toLowerCase()
          .includes(this.state.filter.toLowerCase())
        )
      })
        .filter(recipe => {
          return (
            recipe.price >= this.state.priceMin &&
            recipe.price <= this.state.priceMax
          )
        })
        .filter((recipe) => {

          switch (this.state.timeToPrepare) {

            case 10:
              return recipe.readyInMinutes > 0 && recipe.readyInMinutes <= 30;
            case 20:
              return recipe.readyInMinutes >= 30 && recipe.readyInMinutes <= 45;
            case 30:
              return recipe.readyInMinutes >= 45;
            default:
              return recipe;
          }
        }),
      currentPage: 1
    })
  }


  handleOnSliderChange = (upDateRange) => {

    this.setState({
      priceMin: upDateRange[0],
      priceMax: upDateRange[1],
    })
    this.applyFilter()

  }

  handleOnFormChange = (textFilter) => {
    this.setState({
      filter: textFilter,
    })
    this.applyFilter()
  }
  handleOnDropDownChange = (dropDownValue) => {
    this.setState({
      timeToPrepare: dropDownValue
    })
    this.applyFilter()
  }

  pageChanged = (pageNumber) => {
    this.setState({
      currentPage: pageNumber
    })

  }
  clickedRecipesPerPage = (value) => {
    this.setState({
      recipesPerPage: value
    })
  }

  recipesAfterFiltering = (newLength) => {
    this.setState({
      recipesLength: newLength
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

          <ControlledOpenSelect
            onDropDownChange={this.handleOnDropDownChange}
            dropDown={this.state.timeToPrepare}
          />

        </div>
        <ViewOption onClickedRecipesPerPage={this.clickedRecipesPerPage} />
        <RecipesList
          recipesList={this.state.recipesList}
          filter={this.state.filter}
          priceMin={this.state.priceMin}
          priceMax={this.state.priceMax}
          timeOfPreparation={this.state.timeToPrepare}
          currentPage={this.state.currentPage}
          recipesPerPage={this.state.recipesPerPage}
          onRecipesAfterFiltering={this.recipesAfterFiltering}


        />
        <BasicPagination
          recipesPerPage={this.state.recipesPerPage}
          recipesLength={this.state.recipesList.length}
          updatePage={this.pageChanged}

        />
      </>
    )
  }
}
export default Search
