import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EcoIcon from '@material-ui/icons/Eco';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import TimerIcon from '@material-ui/icons/Timer';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
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

  button: {
    margin: theme.spacing(1),
    backgroundColor: 'rgba(209, 26, 42, 0.7)',
    color: 'white',
    padding: '0.75rem',
    fontSize: '1rem'
  },
}));

export default function FullRecipeCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onClickHandlerButton = () => {
        localStorage.removeItem(props.title, props.title);
        window.location.reload(true);
     } 

  

  return (
    <Card className={classes.root} className={styles.singleCardMaterialUI}>
      <CardHeader
        action={
          <IconButton aria-label="eco">
            <EcoIcon color='primary'/>
          </IconButton>
        }
        title={props.title}
      />

      
      <CardMedia
        className={classes.media}
        image={props.photoURL}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            <div className={styles.paragraph}>
                <TimerIcon style={{fontSize: '1.75rem'}} />: {props.readyInMinutes} min <hr/>
                <LocalDiningIcon style={{fontSize: '1.75rem'}}/>: {props.servings} <hr/>
                <AttachMoneyIcon style={{fontSize: '1.75rem'}}/>: {props.price} zł
            </div>

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
          <Button
            onClick={onClickHandlerButton}
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
          >
            Usuń z ulubionych
          </Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        > 
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Przepis:  </Typography>
          <Typography paragraph>
              {props.recipe}
          </Typography>

        </CardContent>
      </Collapse>
    </Card>
  );
}