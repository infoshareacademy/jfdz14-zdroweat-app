import React from 'react'
import Piechart from './Piechart'
import Barchart from './Barchart'
import Map from './Map'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const DashboardWrapper = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>

                <Grid item xs={12}>
                    <Map />
                </Grid>
                <Grid item xs={6}>
                    <Piechart />
                </Grid>

                <Grid item xs={6}>
                    <div style={{
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column"
                    }}>Mamy 99,9% pozytywnych opinii</div>
                </Grid>
                <Grid item xs={3}>
                    <div>W każdym przedziale wiekowym!</div>
                </Grid>

                <Grid item xs={9}>
                    <Barchart />
                </Grid>

            </Grid>
        </div>
    )
}

export default DashboardWrapper