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
  cardTop: {
    height: '100px'
  },
  favIcon: {
    position: 'relative',
    top: '20px',
   
  }
}))

const RecipeReviewCard = (props) => {
  const classes = useStyles()
  const [addToFavourite, addedToFavourite] = React.useState(true)

  const onClickHandler = () => {
    addedToFavourite(!addToFavourite)
    
    if (addToFavourite) {
      localStorage.setItem(props.title, '')
    } else {
      localStorage.removeItem(props.title)
    }
  }
  
  let localStorageArray = [];

  for(let i = 0; i < 30; i++){
    localStorageArray.push(localStorage.key(i))
  }

  let favColor = () => {
    if (localStorageArray.includes(props.title)){
      return red[500]
    } else {
        return grey[500]
    }
  }

  return (
    <Card className={classes.root} className={styles.singleCardMaterialUI}>
      
        <CardHeader
          action={
            <IconButton aria-label="add to favorites" className={classes.favIcon}>
              <AuthIcons>
                <FavoriteIcon 
                  style={{ color: favColor()}} 
                  onClick={onClickHandler}
                />
              </AuthIcons>
            </IconButton>

          }
          title={props.title}
          className={classes.cardTop}
        />
      
      <Link to={`Search/${props.id}`} className={styles.link}>
        <CardMedia className={classes.media} image={props.photoURL} />
      </Link>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <div className={styles.cardBottom}>
            <div className={styles.icons}>
              <TimerIcon style={{ fontSize: '1.75rem' }} />:{' '}
              {props.readyInMinutes} min
            </div>
            <div className={styles.icons}>
              <AttachMoneyIcon style={{ fontSize: '1.75rem' }} />: {props.price}{' '}
              zł 
            </div>
            
          </div>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default RecipeReviewCard;


