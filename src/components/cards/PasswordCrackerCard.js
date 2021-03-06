import React, { Component } from "react";
import {
  TextField,
  Typography,
  Card,
  CardContent,
  FormGroup,
  Chip
} from "@material-ui/core";

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

function filterWord(letter, column) {
  if (column === "" || column === null) {
    return true;
  }
  return column.indexOf(letter) !== -1;
}

class PasswordCracker extends Component {
  constructor() {
    super();
    this.state = {
      column1: null,
      column2: null,
      column3: null,
      column4: null,
      column5: null
    };
    this.handleChange = this.handleChange.bind(this);
  }
  getCandidates() {
    let candidates = this.filterCandidates();
    if (candidates.length > 10) {
      return <span>Candidates: 10+</span>;
    }
    return <span>Candidates: {candidates.join(" ")}</span>;
  }
  filterCandidates() {
    let { column1, column2, column3, column4, column5 } = this.state;
    return words
      .filter(word => filterWord(word[0], column1))
      .filter(word => filterWord(word[1], column2))
      .filter(word => filterWord(word[2], column3))
      .filter(word => filterWord(word[3], column4))
      .filter(word => filterWord(word[4], column5));
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value.trim().toLowerCase()
    });
  }
  render() {
    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Password
          </Typography>
          <FormGroup row>
            <TextField
              label="Column 1"
              name="column1"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup row>
            <TextField
              label="Column 2"
              name="column2"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup row>
            <TextField
              label="Column 3"
              name="column3"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup row>
            <TextField
              label="Column 4"
              name="column4"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup row>
            <TextField
              label="Column 5"
              name="column5"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup row>
            <Chip label={this.getCandidates()} />
          </FormGroup>
        </CardContent>
      </Card>
    );
  }
}

export default PasswordCracker;
