import React from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import DashboardWrapper from "./Dashboard/DasboardWrapper";
import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const GridWrapper = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <BrowserRouter>
          <Grid item xs={12}>
            <Navbar />
          </Grid>

          <Grid item xs={1}>
            <li>
              <NavLink exact activeClassName="active-nav" to="/">
                Strona główna
              </NavLink>
            </li>

            <li>
              <NavLink
                exact
                activeClassName="active-nav"
                to="/DashboardWrapper"
              >
                Statystyki
              </NavLink>
            </li>
          </Grid>

          <Grid item xs={11}>
            {" "}
            <Switch>
              <Route path="/DashboardWrapper" component={DashboardWrapper}>
                <DashboardWrapper />
              </Route>
            </Switch>
          </Grid>
        </BrowserRouter>
      </Grid>
    </div>
  );
};

export default GridWrapper;
