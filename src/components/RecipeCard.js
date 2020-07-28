import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { red, grey } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import TimerIcon from '@material-ui/icons/Timer'

import EcoIcon from '@material-ui/icons/Eco'
import styles from './styles.module.css'

import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}))

export default function RecipeReviewCard(props) {
  const classes = useStyles()

  const [addedToFavourite, addToFavourite] = React.useState(true)

  let favColor = () => {
    if (!addedToFavourite) {
      localStorage.setItem(`${props.title} color`, red[500])
      return red[500]
    } else {
      localStorage.removeItem(`${props.title} color`)
      return grey[500]
    }
  }

  const onClickHandler = () => {
    addToFavourite(!addedToFavourite)

    if (addedToFavourite) {
      localStorage.setItem(props.title, props.title)
    } else {
      localStorage.removeItem(props.title)
    }
  }

  return (
    <Card className={classes.root} className={styles.singleCardMaterialUI}>
      <Link to={`Search/${props.id}`} className={styles.link}>
        <CardHeader
          action={
            <IconButton aria-label="eco">
              <EcoIcon color="primary" />
            </IconButton>
          }
          title={props.title}
        />
      </Link>

      <CardMedia className={classes.media} image={props.photoURL} />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <div className={styles.paragraph}>
            <TimerIcon style={{ fontSize: '1.75rem' }} />:{' '}
            {props.readyInMinutes} min <hr />
            <AttachMoneyIcon style={{ fontSize: '1.75rem' }} />: {props.price}{' '}
            zł
          </div>
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon
            style={{ color: favColor() }}
            onClick={onClickHandler}
          />
        </IconButton>
      </CardActions>
    </Card>
  )
}
