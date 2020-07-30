import React from 'react'
import { recipes } from '../data/Recipes'
import { useParams } from 'react-router-dom'
import CardActions from '@material-ui/core/CardActions'

import { red, grey } from '@material-ui/core/colors'
import styles from './SingleRecipe.module.css'

// icons
import FavoriteIcon from '@material-ui/icons/Favorite'
import IconButton from '@material-ui/core/IconButton'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import RestaurantIcon from '@material-ui/icons/Restaurant'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import TimerIcon from '@material-ui/icons/Timer'
import LocalDiningIcon from '@material-ui/icons/LocalDining'
const SingleRecipe = (props) => {
  const [addToFavourite, addedToFavourite] = React.useState(true)

  let { id } = useParams()
  const Recipe = recipes.find((item) => item.id.toString() === id)
  if (!Recipe) {
    return null
  }


  const onClickHandler = () => {
    addedToFavourite(!addToFavourite)
    
    if (addToFavourite) {
      localStorage.setItem(Recipe.name, '')
    } else {
      localStorage.removeItem(Recipe.name)
    }
  }
  
  let localStorageArray = [];

  for(let i = 0; i < 30; i++){
    localStorageArray.push(localStorage.key(i))
  }

  let favColor = () => {
    if (localStorageArray.includes(Recipe.name)){
      return red[500]
    } else {
        return grey[500]
    }
  }
  
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{Recipe.name}</p>
      <div className={styles.img_wrapper}>
        <img src={Recipe.photoURL} className={styles.img} />
      </div>
      <div className={styles.row_wrapper}>
        <p>
          <LocalDiningIcon
            style={{ fontSize: '2rem' }}
            className={styles.icon}
          />
          : {Recipe.servings}
        </p>
        {/* <hr width="1" size="30" /> */}
        <p>
          <TimerIcon style={{ fontSize: '2rem' }} className={styles.icon} /> :{' '}
          {`${Recipe.readyInMinutes} min`}
        </p>
        <p>
          <AttachMoneyIcon
            style={{ fontSize: '2rem' }}
            className={styles.icon}
          />
          : {`${Recipe.price} zł`}
        </p>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon
              style={{ color: favColor() }}
              onClick={onClickHandler}
            />
          </IconButton>
        </CardActions>
      </div>

      <div className={styles.main}>
        <p className={styles.title} style={{ fontSize: '1.5rem' }}>
          Sposób przygotowania
        </p>
        <p className={styles.recipe}> {Recipe.recipe}</p>
      </div>
    </div>
  )
}

export default SingleRecipe
