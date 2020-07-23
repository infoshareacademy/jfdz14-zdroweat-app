import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

import CardActions from '@material-ui/core/CardActions';

import IconButton from '@material-ui/core/IconButton';

import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';


import EcoIcon from '@material-ui/icons/Eco';
import styles from './styles.module.css';

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
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();

  const [addedToFavourite, addToFavourite] = React.useState(true);

  const onClickHandler = () => {
    addToFavourite(!addedToFavourite)

    if (addedToFavourite) {
      localStorage.setItem(props.title, props.title);
     } else {
        localStorage.removeItem(props.title, props.title);
      }

  };

  return (
    <Card className={classes.root} className={styles.singleCardMaterialUI}>
      <CardHeader
        action={
          <IconButton aria-label="eco">
            <EcoIcon />
          </IconButton>
        }
        title={props.title}
        // subheader={props.readyInMinutes}
      />
      <CardMedia
        className={classes.media}
        // className= {styles.photos}
        image={props.photoURL}
      />
      {/* <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Przepis dla: {props.servings} osób <hr/>
          Czas przygotowania: {props.readyInMinutes} min <hr/>
          Cena: {props.price} zł

            
        </Typography>
      </CardContent> */}
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick={onClickHandler}/>
        </IconButton>

      </CardActions>
      
    </Card>
  );
}