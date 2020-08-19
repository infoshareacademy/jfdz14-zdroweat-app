import React from 'react'
import RecipeReviewCard from '../RecipeCard'
import styles from "./search.module.css"
import RecipeCardProvider from '../RecipeCardProvider';
import RecipeData from '../RecipeData';

const RecipesList = (props) => {
    const lastIndex = props.currentPage * props.recipesPerPage
    const firstIndex = lastIndex - props.recipesPerPage

    return (
        <div className={styles.recipesList}>
            {props.recipesList
                .filter(recipe => {
                    return (recipe.name
                        .toLowerCase()
                        .includes(props.filter.toLowerCase())
                    )
                })
                .filter(recipe => {
                    return (
                        recipe.price >= props.priceMin &&
                        recipe.price <= props.priceMax
                    )
                })
                .filter((recipe) => {


                    switch (props.timeOfPreparation) {

                        case 10:
                            return recipe.readyInMinutes > 0 && recipe.readyInMinutes <= 30;
                        case 20:
                            return recipe.readyInMinutes >= 30 && recipe.readyInMinutes <= 45;
                        case 30:
                            return recipe.readyInMinutes >= 45;
                        default:
                            return recipe;
                    }

                })
                .slice(firstIndex, lastIndex)
                .map((recipe) => {

                    return (
                        <RecipeReviewCard
                            className={styles.recipeItem}
                            key={recipe.id}
                            id={recipe.id}
                            title={recipe.name}
                            photoURL={recipe.photoURL}
                            servings={recipe.servings}
                            price={recipe.price}
                            readyInMinutes={recipe.readyInMinutes}
                            recipe={recipe.recipe}
                        />

                        //tutaj trzeba wsadzić coś takiego, tylko wtedy jest jakiś błąd przy filtrze i paginacji.
                        //przykład tego jak to dziala w plikach RecipeCardProvider, RecipeCardProviderIndex i
                        //RecupeData. Oraz pod adresem: http://localhost:3000/test
                        // <RecipeCardProvider
                        //     className={styles.recipeItem}
                        //     renderComponent={RecipeData}
                        //     url={'https://zdroweat-7d0b0.firebaseio.com/recipes.json'}
                        // />
                    )
                })


            }


        </div>
    )
}

export default RecipesList

