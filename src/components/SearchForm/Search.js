import React from 'react'
import RangeSlider from './slider'
import ControlledOpenSelect from './dropdown'
import BasicTextFields from './inputSearch'
import RecipesList from "./recipesList"
import styles from './search.module.css'
import BasicPagination from './pagination'
import PageWrapper from './pagewrapper'
import CircularProgress from '@material-ui/core/CircularProgress';
import RadioButtonsGroup from './recipesPerPage'
import { DATABASE_URL } from '../../index'



class Search extends React.Component {
  state = {
    recipesList: [],
    filteredList: [],
    filter: '',
    priceMin: 0,
    priceMax: 100,
    timeToPrepare: 0,
    currentPage: 1,
    recipesPerPage: 8,
    isLoading: true
  }

  fetchData = () => {
    fetch(`${DATABASE_URL}/recipes.json`)
      .then(response => response.json())
      .then(recipes => {
        
        const arrayRecipes = recipes
          ? Object
            .keys(recipes)
            .map(key => {
              return {
                ...recipes[key],
                id: key
              }
            })
          : []

        this.setState({
          recipesList: arrayRecipes,
          filteredList: arrayRecipes,
          isLoading: false
        })
      })
  }

  componentDidMount() {
    this.fetchData()
  }

  applyFilter = () => {
    this.setState({
      filteredList: this.state.recipesList.filter(recipe => {
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
    }, () => {
      this.applyFilter()
    })
  }

  handleOnFormChange = (textFilter) => {
    this.setState({
      filter: textFilter,
    }, () => {
      this.applyFilter()
    })
  }

  handleOnDropDownChange = (newDropDownValue) => {
    this.setState({
      timeToPrepare: newDropDownValue
    }, () => {
      this.applyFilter()
    })

  }

  pageChanged = (pageNumber) => {
    this.setState({
      currentPage: pageNumber
    })

  }

  recipesPerPageChanged = (value) => {
    this.setState({
      recipesPerPage: value
    })
  }

  render() {
    return (
      <div style={{ marginBottom: '20px' }}>
        <div className={styles.flexBar}>
          <div className={styles.inputForm}>
            <BasicTextFields
              onFormChange={this.handleOnFormChange}
              filterValue={this.state.filter}
            />
          </div>

          <div className={styles.slider}><RangeSlider
            onSliderChange={this.handleOnSliderChange}
            priceMin={this.state.priceMin}
            priceMax={this.state.priceMax}

          />
          </div>

          <div className={styles.dropdown}>
            <ControlledOpenSelect
              onDropDownChange={this.handleOnDropDownChange}
              dropDownValue={this.state.timeToPrepare}
            />
          </div>
        </div>
        <hr className={styles.borderLine} />
        <div style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}><RadioButtonsGroup onRecipesPerPageChanged={this.recipesPerPageChanged} /></div>
        {
          this.state.isLoading
            ?
            <PageWrapper><CircularProgress size="350px" /></PageWrapper>
            :
            <>
              <RecipesList
                recipesList={this.state.filteredList}
                currentPage={this.state.currentPage}
                recipesPerPage={this.state.recipesPerPage}

              />
              <BasicPagination
                recipesPerPage={this.state.recipesPerPage}
                recipesLength={this.state.filteredList.length}
                updatePage={this.pageChanged}

              />
            </>
        }

      </div >
    )
  }
}

export default Search 
