import React from 'react'
import RangeSlider from './slider'
import ControlledOpenSelect from './dropdown'
import BasicTextFields from './inputSearch'
import { recipes } from '../../data/Recipes'
import RecipesList from "./recipesList"
import styles from './search.module.css'
import BasicPagination from './pagination'

const compareNumbers = (a, b) => {
  return a - b
}
const getStartRange = recipes
  .map((recipe) => {
    return recipe.price
  })
  .sort(compareNumbers)

class Search extends React.Component {
  state = {
    recipesList: [],
    filter: '',
    priceMin: getStartRange[0],
    priceMax: getStartRange[getStartRange.length - 1],
    timeToPrepare: 0,
    currentPage: 1,
    postsPerPage: 10,
  }

  handleOnSliderChange = (upDateRange) => {

    this.setState({
      priceMin: upDateRange[0],
      priceMax: upDateRange[1],
    })
  }

  handleOnFormChange = (textFilter) => {
    this.setState({
      filter: textFilter,
    })
  }
  handleOnDropDownChange = (dropDownValue) => {
    this.setState({
      timeToPrepare: dropDownValue
    })
  }

  componentDidMount() {
    this.setState({
      recipesList: recipes,
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
        <RecipesList
          recipesList={this.state.recipesList}
          filter={this.state.filter}
          priceMin={this.state.priceMin}
          priceMax={this.state.priceMax}
          timeOfPreparation={this.state.timeToPrepare}
        />
        <BasicPagination />
      </>
    )
  }
}
export default Search
