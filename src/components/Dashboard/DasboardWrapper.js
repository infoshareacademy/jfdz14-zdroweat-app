import React from "react";
import Piechart from "./Piechart";
import Barchart from "./Barchart";
import Map from "./Map";
import DashboardText from "./DashboardText";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./Dashboard.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const DashboardWrapper = () => {
  const classes = useStyles();
  return (
    <div className={(classes.root, styles.wrapper)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Map />
        </Grid>

        <Grid item xs={6}>
          <Piechart />
        </Grid>

        <Grid item xs={6} className={styles.text}>
          <DashboardText
            className={styles.text}
            text="Nasze przepisy i usługi mają 99,9% pozytywnych opinii!"
          />
        </Grid>
        <Grid item xs={3} className={styles.text}>
          <DashboardText text="Z naszej aplikacji korzystają użytkownicy w każdym przedziale wiekowym!" />
        </Grid>

        <Grid item xs={9}>
          <Barchart />
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardWrapper;
