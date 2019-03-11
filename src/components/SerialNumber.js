import React, { Component } from "react";
import {
  Typography,
  Card,
  CardContent,
  TextField,
  MenuItem
} from "@material-ui/core";

const SERIAL_MAX_LENGTH = 6;

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

class SerialNumber extends Component {
  constructor() {
    super();
    this.state = {
      serial: null,
      batteriesCount: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value.trim()
    });
  }
  render() {
    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Serial and Batteries
          </Typography>
          <TextField
            label="Serial"
            name="serial"
            inputProps={{ maxLength: SERIAL_MAX_LENGTH }}
            onChange={this.handleChange}
          />
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

export default SerialNumber;
