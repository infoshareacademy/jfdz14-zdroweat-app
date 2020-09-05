import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AuthIcons from './AuthIcons';
import IconButton from '@material-ui/core/IconButton';
import { red, grey } from '@material-ui/core/colors';
import styles from './styles.module.css'
import firebase from 'firebase';

class HeartIcon extends React.Component {
    state = {
        isAdded: false,
        editId: null
    }
    

    onClickHandler = () => {
        const currentUser = firebase.auth().currentUser;

        if(!this.state.isAdded) {
            let databaseRef = firebase.database().ref(currentUser.uid).push();
      
                databaseRef.set({
                  'name': this.props.title,
                  'photoURL': this.props.photoURL,
                  'price': this.props.price,
                  'readyInMinutes': this.props.readyInMinutes,
                  'recipe': this.props.recipe,
                  'servings': this.props.servings,
                }) 
            
            this.setState({
                isAdded: true
            })
        } else {
                fetch(`https://zdroweat-7d0b0.firebaseio.com/${currentUser.uid}.json`, {
                    method: 'DELETE'
            }).then(
                this.setState({
                    isAdded: false
                })
            )} 
    }

    favColor = () => {
        if(this.state.isAdded) {
            return red[500]
        } else {
            return grey[500]
        }   
    }

    render() {
        return (
            <IconButton aria-label="add to favorites" className={styles.favIcon}>
            <AuthIcons>
              <FavoriteIcon
                style={{ color: this.favColor() }}
                onClick={this.onClickHandler}
              />
            </AuthIcons>
          </IconButton>
        )
    }
}

export default HeartIcon;