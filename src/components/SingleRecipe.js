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

const SingleRecipe = (props) => {
  const [addedToFavourite, addToFavourite] = React.useState(true)

  let { id } = useParams()
  const Recipe = recipes.find((item) => item.id.toString() === id)
  if (!Recipe) {
    return null
  }

  let favColor = () => {
    if (!addedToFavourite) {
      localStorage.setItem(`${Recipe.name} color`, '#bb8588')
      return '#bb8588'
    } else {
      localStorage.removeItem(`${Recipe.name} color`)
      return grey[500]
    }
  }

  const onClickHandler = () => {
    addToFavourite(!addedToFavourite)

    if (addedToFavourite) {
      localStorage.setItem(Recipe.name, Recipe.name)
    } else {
      localStorage.removeItem(Recipe.name)
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
          <RestaurantIcon
            style={{ fontSize: '2rem' }}
            className={styles.icon}
          />{' '}
          Porcje: {Recipe.servings}
        </p>
        {/* <hr width="1" size="30" /> */}
        <p>
          <AccessTimeIcon
            style={{ fontSize: '2rem' }}
            className={styles.icon}
          />{' '}
          {`${Recipe.readyInMinutes} min`}
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
        <p className={styles.end_text}>Smacznego!</p>
      </div>
    </div>
  )
}

export default SingleRecipe
