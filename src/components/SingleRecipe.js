import React from 'react'
import CardActions from '@material-ui/core/CardActions'
import AuthIcons from './AuthIcons'
// import { red, grey } from '@material-ui/core/colors'
import styles from './SingleRecipe.module.css'
import { Link } from 'react-router-dom'
import { DATABASE_URL } from '../index'
import firebase from 'firebase'
// icons
import CloseIcon from '@material-ui/icons/Close'
import FavoriteIcon from '@material-ui/icons/Favorite'
import IconButton from '@material-ui/core/IconButton'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import TimerIcon from '@material-ui/icons/Timer'
import LocalDiningIcon from '@material-ui/icons/LocalDining'

class SingleRecipe extends React.Component {
  state = {
    name: '',
    recipe: '',
    photoURL: '',
    readyInMinutes: null,
    price: null,
    servings: null,
    addedToFavourite: true,
    addToFavourite: true,
  }

  onClickHandler = async () => {
    console.log('click')
    // const currentUser = await firebase.auth().currentUser
    // // this.state.addedToFavourite(!this.state.addToFavourite)

    // if (this.state.addToFavourite) {
    //   let databaseRef = await firebase
    //     .database()
    //     .ref(currentUser.uid)
    //     .child('Favourites')
    //     .push()
    //   databaseRef.set({
    //     name: this.state.name,
    //   })
    // } else {
    //   console.log('Usunięto')
    // }
  }

  componentDidMount() {
    fetch(`${DATABASE_URL}/recipes/${this.props.match.params.id - 1}.json`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          ...data,
        })
        console.log(data)
      })
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <Link to={`/`} className={styles.link}>
          <button className={styles.button}>
            <CloseIcon />
          </button>
        </Link>

        <p className={styles.title}>{this.state.name}</p>
        <div className={styles.img_wrapper}>
          <img src={this.state.photoURL} className={styles.img} />
        </div>
        <div className={styles.row_wrapper}>
          <p>
            <LocalDiningIcon
              style={{ fontSize: '2rem' }}
              className={styles.icon}
            />
            : {this.state.servings}
          </p>

          <p>
            <TimerIcon style={{ fontSize: '2rem' }} className={styles.icon} /> :{' '}
            {`${this.state.readyInMinutes} min`}
          </p>
          <p>
            <AttachMoneyIcon
              style={{ fontSize: '2rem' }}
              className={styles.icon}
            />
            : {`${this.state.price} zł`}
          </p>
          <CardActions disableSpacing>
            <IconButton
              aria-label="add to favorites"
              style={{ margin: '0 auto' }}
            >
              <AuthIcons>
                <FavoriteIcon
                  // style={{ color: 'red' }}
                  onClick={this.onClickHandler}
                />
              </AuthIcons>
            </IconButton>
          </CardActions>
        </div>

        <div className={styles.main}>
          <p className={styles.title}>Sposób przygotowania</p>
          <p className={styles.recipe}> {this.state.recipe}</p>
        </div>
      </div>
    )
  }
}

export default SingleRecipe
