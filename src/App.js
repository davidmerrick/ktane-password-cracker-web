import React, { Component } from "react";
import SerialNumberCard from "./components/cards/SerialNumberCard";
import PasswordCracker from "./components/cards/PasswordCrackerCard";
import DescriptionCard from "./components/cards/DescriptionCard";
import { Typography, AppBar, Toolbar, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import "./App.css";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class App extends Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" color="inherit">
              KTANE Solver{" "}
              <span role="img" aria-label="bomb">
                💣💥
              </span>
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <DescriptionCard />
          </Grid>
          <Grid item xs={3}>
            <SerialNumberCard />
          </Grid>
          <Grid item xs={3}>
            <PasswordCracker />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
