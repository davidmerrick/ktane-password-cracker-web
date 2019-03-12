import React, { Component } from "react";
import SerialNumberField from "../fields/SerialNumberField";
import {
  Typography,
  Card,
  CardContent,
  TextField,
  MenuItem
} from "@material-ui/core";

const batteries = [
  {
    value: 0,
    label: "0"
  },
  {
    value: 1,
    label: "1"
  },
  {
    value: 2,
    label: "2"
  },
  {
    value: 3,
    label: "3"
  }
];

class SerialNumberCard extends Component {
  constructor() {
    super();
    this.state = {
      batteriesCount: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Serial and Batteries
          </Typography>
          <SerialNumberField />
          <br />
          <TextField
            select
            name="batteriesCount"
            label="Batteries"
            value={this.state.batteriesCount}
            onChange={this.handleChange}
            margin="normal"
          >
            {batteries.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </CardContent>
      </Card>
    );
  }
}

export default SerialNumberCard;
