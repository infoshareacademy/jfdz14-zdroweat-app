import React from 'react'
import { recipes } from '../data/Recipes'
import { useParams } from 'react-router-dom'
import CardActions from '@material-ui/core/CardActions'
import FavoriteIcon from '@material-ui/icons/Favorite'
import IconButton from '@material-ui/core/IconButton'
import CardMedia from '@material-ui/core/CardMedia'
console.log(recipes)
const SingleRecipe = (props) => {
  const [addedToFavourite, addToFavourite] = React.useState(true)

  let { id } = useParams()
  const Recipe = recipes.find((item) => item.id.toString() === id)
  if (!Recipe) {
    return null
  }

  const onClickHandler = () => {
    addToFavourite(!addedToFavourite)

    if (addedToFavourite) {
      localStorage.setItem(props.title, props.title)
    } else {
      localStorage.removeItem(props.title, props.title)
    }
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <p style={{ fontSize: '30px' }}>{Recipe.name}</p>
      <div style={{ width: '100%', height: '50vh' }}>
        <img
          src={Recipe.photoURL}
          style={{ height: '300px', width: '500px' }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <p>Porcje: {Recipe.servings}</p> <hr width="1" size="30" />
        <p>{`${Recipe.readyInMinutes} min`}</p>
      </div>
      <p>Przepis: {Recipe.recipe}</p>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick={onClickHandler} />
        </IconButton>
      </CardActions>
    </div>
  )
}

export default SingleRecipe
