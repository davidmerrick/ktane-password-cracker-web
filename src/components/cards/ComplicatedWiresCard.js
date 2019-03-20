import React, { Component } from "react";
import { Typography, Card, CardContent } from "@material-ui/core";
import {
  WIRE_WHITE,
  WIRE_RED_BLUE_STRIPES,
  WIRE_BLUE,
  WIRE_BLUE_WHITE_STRIPES,
  WIRE_RED_WHITE_STRIPES,
  WIRE_RED,
  STAR,
  NO_STAR,
  LED_ON,
  LED_OFF,
  CUT,
  NO_CUT,
  BATT_CUT,
  PORT_CUT,
  SERIAL_CUT
} from "./ComplicatedWiresColors";
import ComplicatedWiresMap from "./ComplicatedWiresMap";
import {
  FormGroup,
  FormControlLabel,
  Switch,
  MenuItem,
  TextField
} from "@material-ui/core";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state
});

const wireColors = [
  {
    value: WIRE_WHITE,
    label: "White"
  },
  {
    value: WIRE_RED_WHITE_STRIPES,
    label: "Red, white stripes"
  },
  {
    value: WIRE_RED,
    label: "Red"
  },
  {
    value: WIRE_BLUE,
    label: "Blue"
  },
  {
    value: WIRE_BLUE_WHITE_STRIPES,
    label: "Blue, white stripes"
  },
  {
    value: WIRE_RED_BLUE_STRIPES,
    label: "Red, blue stripes"
  }
];

class ComplicatedWiresCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      led: false,
      star: false,
      wireColor: WIRE_WHITE
    };
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  toggleSwitch(e) {
    this.setState({
      [e.target.name]: e.target.checked
    });
  }
  handleSelect(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  getResult() {
    let star = this.state.star ? STAR : NO_STAR;
    let led = this.state.led ? LED_ON : LED_OFF;
    return ComplicatedWiresMap.get(this.state.wireColor)
      .get(led)
      .get(star);
  }
  getCutMessage() {
    switch (this.getResult()) {
      case CUT:
        return "Cut";
      case NO_CUT:
        return "Don't cut";
      case BATT_CUT:
        return "Cut if 2 or more batteries";
      case PORT_CUT:
        return "Cut if there's a parallel port";
      case SERIAL_CUT:
        return "Cut if serial number is even";
      default:
        return "Error";
    }
  }
  render() {
    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Complicated Wires
          </Typography>
          <FormGroup row>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.led}
                  onChange={this.toggleSwitch}
                  name="led"
                />
              }
              label="LED"
            />
          </FormGroup>
          <FormGroup row>
            <TextField
              select
              name="wireColor"
              label="Wire Color"
              value={this.state.wireColor}
              onChange={this.handleSelect}
              margin="normal"
            >
              {wireColors.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormGroup>
          <FormGroup row>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.star}
                  onChange={this.toggleSwitch}
                  name="star"
                />
              }
              label="Star"
            />
          </FormGroup>
          {this.getCutMessage()}
        </CardContent>
      </Card>
    );
  }
}

export default connect(mapStateToProps)(ComplicatedWiresCard);
