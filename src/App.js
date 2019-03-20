import React, { Component } from "react";
import SerialNumberCard from "./components/cards/SerialNumberCard";
import PasswordCracker from "./components/cards/PasswordCrackerCard";
import ComplicatedWiresCard from "./components/cards/ComplicatedWiresCard";
import DescriptionCard from "./components/cards/DescriptionCard";
import { Typography, AppBar, Toolbar, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import "./App.css";
import SimpleWiresCard from "./components/cards/SimpleWiresCard";

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
          <Grid item sm={12}>
            <DescriptionCard />
          </Grid>
          <Grid item sm={12} md={3}>
            <SerialNumberCard />
          </Grid>
          <Grid item sm={12} md={3}>
            <PasswordCracker />
          </Grid>
          <Grid item sm={12} md={3}>
            <ComplicatedWiresCard />
          </Grid>
          <Grid item sm={12} md={3}>
            <SimpleWiresCard />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
