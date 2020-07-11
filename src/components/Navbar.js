import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';


const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });
  
  export default function Navbar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="STRONA GŁÓWNA" />
          <Tab label="ZDROWEATOWE PRZEPISY" />
          <Tab label="ZDROWEAT W LICZBACH" />
          <Tab label="NASI FANI" />
        </Tabs>
      </Paper>
    );
  }