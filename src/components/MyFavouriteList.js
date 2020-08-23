// import React from "react";
// import FullRecipeCard from './FullRecipeCard';
// import { recipes } from "../data/Recipes";
// import styles from './styles.module.css';
// import Auth from './Auth';
// import firebase from 'firebase';

// const MyFavouriteList = () => {
//     let favourites = [];
//         for(let i = 0; i < 30; i++){
//             favourites.push(localStorage.key(i));
//         }
        
//     return (  
//         <Auth>         
//             <h1 className={styles.header}>Twoje ulubione przepisy</h1>
//             <div className={styles.recipesList}>
//                 {
//                     recipes.map(recipe => {
//                         if(favourites.includes(recipe.name)){
//                             return (
//                                 <FullRecipeCard
//                                     title={recipe.name}
//                                     photoURL={recipe.photoURL}
//                                     servings = {recipe.servings}
//                                     price = {recipe.price}
//                                     readyInMinutes = {recipe.readyInMinutes}
//                                     recipe = {recipe.recipe}
//                                     />
//                             )
//                         }
                    
//                     })
//                 }
//             </div>
//         </Auth>
//     )
// }

// export default MyFavouriteList;

import React from "react";
import FullRecipeCard from './FullRecipeCard';
import styles from './styles.module.css';
import Auth from './Auth';
import firebase from 'firebase';

let data = [];
let currentUser

class MyFavouriteList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            favouriteList: data,

        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.getFavourites();
            }
        })
    }

    getFavourites = async () => {
        const currentUser = await firebase.auth().currentUser

        firebase.database().ref(currentUser.uid).child('Favourites').once('value').then((snapshot) => {
            // console.log(snapshot.val())
            

            this.setState({
                favouriteList: snapshot.val()
            })

            console.log(this.state.favouriteList)
        })
    }

    render() {
        return (  
            <Auth>         
                <h1 className={styles.header}>Twoje ulubione przepisy</h1>
                {/* {
                    this.state.favouriteList.map((recipe) => {
                        return <div>{recipe.name}</div>
                    })
                } */}
            </Auth>
        )
    }  
}

export default MyFavouriteList;