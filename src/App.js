import React, { Component } from "react";
import { TextField, Typography, Button } from "@material-ui/core";
import "./App.css";

const words = [
  "about",
  "after",
  "again",
  "below",
  "could",
  "every",
  "first",
  "found",
  "great",
  "house",
  "large",
  "learn",
  "never",
  "other",
  "place",
  "plant",
  "point",
  "right",
  "small",
  "sound",
  "spell",
  "still",
  "study",
  "their",
  "there",
  "these",
  "thing",
  "think",
  "three",
  "water",
  "where",
  "which",
  "world",
  "would",
  "write"
];

function filterWord(word, column) {
  if (column == "") {
    return true;
  }
  return word.indexOf(column) !== -1;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      column1: "",
      column2: "",
      column3: "",
      candidates: words
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let { column1, column2, column3 } = this.state;
    let candidates = words
      .filter(word => filterWord(word[0], column1))
      .filter(word => filterWord(word[1], column2))
      .filter(word => filterWord(word[2], column3));

    this.setState({
      [e.target.name]: e.target.value,
      candidates: candidates
    });
  }
  render() {
    return (
      <div className="App">
        <Typography variant="h4" color="inherit">
          Password Cracker for "Keep Talking and Nobody Explodes"
        </Typography>
        <TextField
          id="standard-multiline-static"
          label="Column 1"
          margin="normal"
          name="column1"
          onChange={this.handleChange}
        />
        <br />
        <TextField
          id="standard-multiline-static"
          label="Column 2"
          margin="normal"
          name="column2"
          onChange={this.handleChange}
        />
        <br />
        <TextField
          id="standard-multiline-static"
          label="Column 3"
          margin="normal"
          name="column3"
          onChange={this.handleChange}
        />
        <br />
        Results: {this.state.candidates.join(" ")}
      </div>
    );
  }
}

export default App;
