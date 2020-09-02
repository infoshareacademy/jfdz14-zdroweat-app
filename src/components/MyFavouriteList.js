import React from "react";
import FullRecipeCard from './FullRecipeCard';
import styles from './styles.module.css';
import Auth from './Auth';
import firebase from 'firebase';

class MyFavouriteList extends React.Component {
        state = {
            favouriteList: [],
            editId: null
        }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.getFavourites();
            }
        })
    }
    
    getFavourites = () => {
        const currentUser = firebase.auth().currentUser

        fetch(`https://zdroweat-7d0b0.firebaseio.com/${currentUser.uid}.json`)
            .then(response => response.json())
            .then(favourites => {
                const arrayFavourites = favourites
                    ? Object
                        .keys(favourites)
                        .map(key => {
                            return {
                                id: key,
                                ...favourites[key]
                            }
                        })
                    : []
        
                this.setState( {
                    favouriteList: arrayFavourites
                })
                // console.log(this.state.favouriteList)
            })
    }

    render() {
        return (  
            <Auth>         
                <h1 className={styles.header}>Twoje ulubione przepisy</h1>
                <div className={styles.recipesList}>
                    {
                        this.state.favouriteList
                            .map(recipe => recipe.id === this.state.editId
                                ? ""
                                : (
                                    <FullRecipeCard
                                        key={recipe.id}
                                        title={recipe.name}
                                        photoURL={recipe.photoURL}
                                        servings = {recipe.servings}
                                        price = {recipe.price}
                                        readyInMinutes = {recipe.readyInMinutes}
                                        recipe = {recipe.recipe}
                                        onDelete={this.getFavourites}
                                        {...recipe}
                                    />
                                )
                            )         
                    } 
                </div>
            </Auth>
        )
    }  
}

export default MyFavouriteList;