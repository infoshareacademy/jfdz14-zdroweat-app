import React from 'react'
import CardActions from '@material-ui/core/CardActions'

import HeartIcon from './HeartIcon'
import CircularProgress from '@material-ui/core/CircularProgress'

// import { red, grey } from '@material-ui/core/colors'
import styles from './SingleRecipe.module.css'
import { Link } from 'react-router-dom'
import { DATABASE_URL } from '../index'

// icons
import CloseIcon from '@material-ui/icons/Close'
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
    isLoading: true,
  }

  componentDidMount() {
    fetch(`${DATABASE_URL}/recipes/${this.props.match.params.id}.json`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          ...data,
          isLoading: false,
        })
      })
  }
  render() {
    const recipeLoaded = (
      <>
        <p className={styles.title}>{this.state.name}</p>
        <div className={styles.img_wrapper}>
          <img src={this.state.photoURL} className={styles.img} />
        </div>
        <div className={styles.row_wrapper}>
          <p style={{ position: 'relative', top: '20px' }}>
            <LocalDiningIcon
              style={{ fontSize: '2rem' }}
              className={styles.icon}
            />
            : {this.state.servings}
          </p>

          <p style={{ position: 'relative', top: '20px' }}>
            <TimerIcon style={{ fontSize: '2rem' }} className={styles.icon} /> :{' '}
            {`${this.state.readyInMinutes} min`}
          </p>
          <p style={{ position: 'relative', top: '20px' }}>
            <AttachMoneyIcon
              style={{ fontSize: '2rem' }}
              className={styles.icon}
            />
            : {`${this.state.price} zł`}
          </p>
          <CardActions
            disableSpacing
            style={{
              display: 'flex',
              alignSelf: 'center',
              justifyContent: 'center',
            }}
          >
            <HeartIcon
              title={this.state.name}
              photoURL={this.state.photoURL}
              price={this.state.price}
              readyInMinutes={this.state.readyInMinutes}
              recipe={this.state.recipe}
              servings={this.state.servings}
            />
          </CardActions>
        </div>

        <div className={styles.main}>
          <p className={styles.title}>Sposób przygotowania</p>
          <p className={styles.recipe}> {this.state.recipe}</p>
        </div>
      </>
    )
    return (
      <div className={styles.wrapper}>
        <Link to={`/`} className={styles.link}>
          <button className={styles.button}>
            <CloseIcon />
          </button>
        </Link>
        {this.state.isLoading ? (
          <div>
            <CircularProgress size="350px" />
          </div>
        ) : (
          recipeLoaded
        )}
      </div>
    )
  }
}

export default SingleRecipe
