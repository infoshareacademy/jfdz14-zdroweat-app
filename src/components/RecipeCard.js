import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { red, grey } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import TimerIcon from '@material-ui/icons/Timer';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import AuthIcons from './AuthIcons';
import firebase from 'firebase';
import HeartIcon from './HeartIcon';


const useStyles = makeStyles((theme) => ({
  root: {
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
  cardTop: {
    height: '100px'
  },

}))     


const RecipeReviewCard = ({title, photoURL, price, readyInMinutes, recipe, servings, id }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} className={styles.singleCardMaterialUI}>

      <CardHeader
        action={
          <HeartIcon 
            title={title}
            photoURL={photoURL}
            price={price}
            readyInMinutes={readyInMinutes}
            recipe={recipe}
            servings={servings}
          />
        }
        title={title}
        className={classes.cardTop}
      />

      <Link to={`Search/${id}`} className={styles.link}>
        <CardMedia className={classes.media} image={photoURL} />
      </Link>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="div">
          <div className={styles.cardBottom}>
            <div className={styles.icons}>
              <TimerIcon style={{ fontSize: '1.75rem' }} />:{' '}
              {readyInMinutes} min
            </div>
            <div className={styles.icons}>
              <AttachMoneyIcon style={{ fontSize: '1.75rem' }} />: {price}{' '}
              zł
            </div>

          </div>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default RecipeReviewCard;