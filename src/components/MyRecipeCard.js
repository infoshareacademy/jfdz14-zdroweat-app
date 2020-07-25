import React from "react";
import styles from './styles.module.css';



class MyRecipeCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            name: props.name,
            photoURL: props.photoURL,
            servings: props.servings,
            readyInMinutes: props.readyInMinutes,
            price: props.price,
            recipe: props.recipe,
            addedToFavourite: false
        }
    }
        onClickHandler = () => {
            // console.log(this.state.recipe)

            if(this.state.addedToFavourite === false) {
                this.state.addedToFavourite = true;
                localStorage.setItem('Favourite dish: ' + this.state.name, this.state.name);
            } else if(this.state.addedToFavourite === true){
                this.state.addedToFavourite = false;
                localStorage.removeItem('Favourite dish: ' + this.state.name);
            }
            

            console.log(this.state.addedToFavourite);
        }

    render() {
        return (
            <>
                <div className={styles.singleCard}>
                    <h2>{this.state.name}</h2>
                    <img className={styles.photo} src={this.state.photoURL}/>

                    <button 
                        className={styles.button} 
                        onClick={this.onClickHandler}>Dodaj do ulubionych</button>

                </div>
            </>
        )
    }
}


export default MyRecipeCard;