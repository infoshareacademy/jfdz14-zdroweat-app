import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SignInButton from './SignInButton';
import TemporaryDrawer from './mobileDrawer'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));



export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <TemporaryDrawer />
                    <Typography variant="h6" className={classes.title}>
                        ZdrowEat
                    </Typography>


                    <SignInButton />


                </Toolbar>
            </AppBar>

        </div>
    );
}
