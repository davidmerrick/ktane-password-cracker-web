import React, { Component } from "react";
import { Typography, Card, CardContent } from "@material-ui/core";
import {
  WIRE_WHITE,
  WIRE_RED_BLUE_STRIPES,
  WIRE_BLUE,
  WIRE_BLUE_WHITE_STRIPES,
  WIRE_RED_WHITE_STRIPES,
  WIRE_RED
} from "../../models/WireColors";
import {
  STAR,
  NO_STAR,
  LED_ON,
  LED_OFF,
  CUT,
  NO_CUT,
  BATT_CUT,
  PORT_CUT,
  SERIAL_CUT
} from "../../models/ComplicatedWires";
import ComplicatedWiresMap from "./ComplicatedWiresMap";
import {
  Avatar,
  FormGroup,
  FormControlLabel,
  Switch,
  MenuItem,
  TextField,
  Chip
} from "@material-ui/core";
import { SERIAL_MAX_LENGTH } from "../../models/SerialNumber";
import { connect } from "react-redux";
import { green, red, amber } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import Done from "@material-ui/icons/Done";
import Block from "@material-ui/icons/Block";

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

const styles = theme => ({
  cut: {
    backgroundColor: green[600]
  },
  noCut: {
    backgroundColor: red[600]
  },
  maybeCut: {
    backgroundColor: amber[600]
  }
});

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
  getCutMessage(result) {
    switch (result) {
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
  getChipColor(result) {
    const { classes } = this.props;
    switch (result) {
      case CUT:
        return classes.cut;
      case NO_CUT:
        return classes.noCut;
      case BATT_CUT:
      case PORT_CUT:
      case SERIAL_CUT:
        return classes.maybeCut;
      default:
        return "default";
    }
  }
  getChipIcon(result) {
    let chipColor = this.getChipColor(result);
    let icon;
    switch (result) {
      case CUT:
        icon = <Done />;
        break;
      case NO_CUT:
        icon = <Block />;
        break;
      case BATT_CUT:
        let { aaBatteries, dBatteries } = this.props.simpleReducer;
        let batteriesCount = aaBatteries + dBatteries;
        icon = batteriesCount >= 2 ? <Done /> : <Block />;
        break;
      case PORT_CUT:
        let { parallelPort } = this.props.simpleReducer;
        icon = parallelPort ? <Done /> : <Block />;
        break;
      case SERIAL_CUT:
        let { serialNumber } = this.props.simpleReducer;
        if (
          serialNumber &&
          serialNumber.length === SERIAL_MAX_LENGTH &&
          serialNumber[serialNumber.length - 1] % 2 === 0
        ) {
          icon = <Done />;
        } else {
          icon = <Block />;
        }
        break;
      default:
        icon = "";
        break;
    }
    return <Avatar className={chipColor}>{icon}</Avatar>;
  }
  render() {
    let result = this.getResult();
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
          <FormGroup row>
            <Chip
              avatar={this.getChipIcon(result)}
              label={this.getCutMessage(result)}
              className={this.getChipColor(result)}
            />
          </FormGroup>
        </CardContent>
      </Card>
    );
  }
}

export default connect(mapStateToProps)(
  withStyles(styles)(ComplicatedWiresCard)
);
