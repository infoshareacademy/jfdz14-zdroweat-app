import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#4267b2',
    color: 'white',
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color='primary'
      size="small"
      className={classes.button}
      startIcon={<FacebookIcon />}
      target='blank'
      href='https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fapp.zdroweat.jfdz14.is-academy.pl%2F&amp;src=sdkpreparse'
    >
      Udostępnij
    </Button>
  )
}


// import React from 'react';
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
// import { red, grey, blue } from '@material-ui/core/colors';
// import FacebookIcon from '@material-ui/icons/Facebook';

// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1),
//     backgroundColor : '#4267b2',
//     color: 'white',
//   },
// }));

// export default function IconLabelButtons() {
//     const classes = useStyles();
  
//     return (
//         <Button
//             variant="contained"
//             color='primary'
//             size="small"
//             className={classes.button}
//             startIcon={<FacebookIcon />}
//             target = 'blank'
//             href = 'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fapp.zdroweat.jfdz14.is-academy.pl%2F&amp;src=sdkpreparse'
//         >
//             Share
//         </Button>
//     )}